import React from "react";
import "./Header.css";

const Header = ()=>{
    return(
        <header id="home">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <h2>Good food choices are good investments</h2>
                        <p>Discover the perfect taste of delicious food made with fresh ingredients and prepared with care. We believe that great food brings people together, so every meal is made to give you a wonderful experience. Enjoy quality, flavor, and freshness in every bite</p>
                        <button onClick={()=>{
                            document.getElementById("explore").scrollIntoView({behavior:"smooth"})
                        }}>order now</button>

                        <button onClick={()=>{
                            document.getElementById("about").scrollIntoView({
                                behavior:"smooth"
                            })
                        }}>learn more</button>
                    </div>
                    <div className="col-md-6"></div>
                </div>
            </div>
        </header>
    )
}
export default Header;


