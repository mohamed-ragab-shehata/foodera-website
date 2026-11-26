    import Container from 'react-bootstrap/Container';
    import Nav from 'react-bootstrap/Nav';
    import "./Navs.css";
    import Navbar from 'react-bootstrap/Navbar';
    import logo from "./logo.png";
    import { useEffect } from "react";


    const Navs=()=> {

// Handles smooth scrolling for internal navigation links with a custom duration,
// while keeping the target section visible below the fixed navbar.
useEffect(() => {
    const handleClick = (e) => {
        const link = e.target.closest('a[href^="#"]');

        if (!link) return;

        const href = link.getAttribute("href");

if (href === "#") {
    e.preventDefault();
    return;
}

const target = document.getElementById(href.slice(1));

if (!target) return;

        e.preventDefault();

        const startPosition = window.scrollY;
        const targetPosition = target.getBoundingClientRect().top + window.scrollY - 90;

        const distance = targetPosition - startPosition;
        const duration = 500;

        let startTime = null;

        function animation(currentTime) {
            if (!startTime) startTime = currentTime;

            const progress = Math.min((currentTime - startTime) / duration, 1);

            const ease = progress;

            window.scrollTo(0, startPosition + distance * ease);

            if (progress < 1) {
                requestAnimationFrame(animation);
            }
        }

        requestAnimationFrame(animation);
    };

    document.addEventListener("click", handleClick);

    return () => {
        document.removeEventListener("click", handleClick);
    };
}, []);

    return (
        <Navbar expand={true}>
        <Container >
            <Navbar.Brand href="#home">
                <img src={logo} alt="logo"/>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls='basic-navbar-nav'/>
            <Navbar.Collapse id='basic-navbar-nav all'>
                <Nav className="ms-auto">
                    <Nav.Link href='#home'>Home</Nav.Link>
                    <Nav.Link href='#about'>about us</Nav.Link>
                    <Nav.Link href='#explore'>explore food</Nav.Link>
                    <Nav.Link href='#Review'>Review</Nav.Link>
                    <Nav.Link href='#faq'>faq</Nav.Link>
                </Nav>
                <Nav >
                    <Nav.Link className='lastNav' onClick={()=>{
                        document.getElementById("explore").scrollIntoView({
                            behavior:"smooth"
                        })
                    }}>Order Now</Nav.Link>
                </Nav>
            </Navbar.Collapse>
            </Container>
        </Navbar>
    );
    }

    export default Navs;