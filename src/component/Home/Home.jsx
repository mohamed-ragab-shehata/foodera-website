import React, { useState } from "react";
import Header from "../Header/Header";
import './Home.css';
import MainLogo from "./images/mainImage.png";
import ingredients from "./images/ingredients.png";
import Data from "../Data/Data";
import user_01 from "./01-Testimonials/08-Ethan Brooks.jpg"
import user_02 from "./01-Testimonials/06-Micheal Johnson.jpg"
import user_03 from "./01-Testimonials/01-Daniel Carter.jpg"
import user_04 from "./01-Testimonials/07-Emily Parker.jpg"
import user_05 from "./01-Testimonials/17-Aisha Rahman.jpg"
import user_06 from "./01-Testimonials/20-Jack Robinson.jpg"
import user_07 from "./01-Testimonials/02-Sophia Bennett.jpg"
import Carousel from 'react-bootstrap/Carousel';

const Home = () => {
  const [valueOfInput,setValueOfInput]=useState("")
  const blogItem = Data.map(item=>{
    return(
            <div key={crypto.randomUUID()} className="col-md-4">
                <div className="box">
              <img src={item.img} alt={item.title}/>
              <h5>{item.title}</h5>
              <span>{item.time}</span>
              <h6>{item.price}</h6>
                </div>
                <button>
                  <a href="#home">order now</a>
                </button>
            </div>
    )
  })
  return (
      <>
        <Header/>  

{/* Numbers Section */}
      <section className="numbers">
            <div className="container">
              <div className="row">
                  <div className="col-md-3">
                    <h2>Great</h2>
                    <h6>Taste</h6>
                  </div>
                    <div className="col-md-3">
                    <h2>Fresh</h2>
                    <h6>Ingredients</h6>
                  </div>
                  <div className="col-md-3">
                  <h2>Made</h2>
                  <h6>With Care</h6>
                  </div>
                  <div className="col-md-3">
                  <h2>Best</h2>
                  <h6>Quality</h6>
                  </div>
              </div>
            </div>
      </section>

{/* Pride Section */}
      <section id="prideSection" className="pride">
            <div className="container">
              <div className="row">
                <div className="col-md-6">
                <img src={MainLogo} alt="image" />
                </div>
                <div className="col-md-6">
                  <h3>We pride ourselves on making real food from the best ingredients.</h3>
                  <p>We believe that great food starts with great ingredients. That's why we carefully select fresh, high-quality ingredients to prepare delicious meals with passion and care. Every dish is thoughtfully prepared to bring you the perfect combination of taste, freshness, and quality.</p>
                  <button onClick={()=>{
                    document.getElementById("about").scrollIntoView({
                      behavior:"smooth"
                    })
                  }}>learn more</button>
                </div>
              </div>
            </div>
      </section>

{/* Ingredients Section */}
      <section id="about" className="ingredients">
              <div className="container">
                  <div className="row">
                      <div className="col-md-6">
                          <h2>We make everything by hand with the best possible ingredients.</h2>
                          <p>Every meal begins with carefully selected ingredients and a passion for great food. We prepare our dishes with attention to every detail, combining fresh flavors and quality ingredients to create delicious meals that make every bite special. Because we believe you deserve nothing less than the best</p>
                          <ul className="ingredients-list">
                            <li>Fresh Ingredients, Every Day.</li>
                            <li>Crafted with Passion and Care.</li>
                            <li>Quality You Can Taste.</li>
                          </ul>
                          <button>
                            <a href="#explore">learn more</a>
                          </button>

                      </div> 
                      <div className="col-md-6">
                        <img src={ingredients} alt="ingredients image" />
                      </div>
                  </div>
              </div>
      </section>

{/* Paralex Section */}
      <section className="paralex">
            <div className="container">
              <div className="row">
                <div className="col-lg-12 col-md-12">
                  <h2>When a man's stomach is full it makes no <br/>difference whether he is rich or poor.</h2>
                  <p>Good food has the power to bring people together and turn ordinary moments into unforgettable memories.<br /> Whether you're sharing a meal with family or enjoying a quiet moment, every bite should be<br /> full of flavor, happiness, and satisfaction.</p>
                  <a href="#prideSection">Discover Our Story</a>
                </div>
              </div>
            </div>
      </section>

{/* Blogs Section */}
      <section id="explore" className="blogs">
            <div className="container">
              <div className="row">
                  <div className="col-lg-12 col-md-12">
                    <h2>Explore Our Foods</h2>
                    <p>Discover a world of irresistible flavors at Foodera, where passion meets perfection in every bite.
                    From freshly prepared sandwiches and delicious vegetarian creations to mouthwatering desserts,
                    every dish is crafted with premium ingredients, exceptional care, and a touch of love.
                    Whether you're craving something light, savory, or sweet, Foodera brings you an unforgettable dining experience made to satisfy every craving. Freshness you can taste, quality you can trust, and flavors you'll never forget.</p>
                  </div>
              </div>
                  <div className="row">
                    {blogItem} 
                  </div>
            </div>
      </section>

{/* Slider Section */}
      <section id="Review" className="slider">
            <div className="container">
              <div className="row">
                <div className="col-lg-12 col-md-12">
                  <h2>Testimonials</h2>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-12 col-md-12">
                      <Carousel>
                            <Carousel.Item>
                              <img src={user_01} alt="..." />
                                  <Carousel.Caption>
                                    <br />
                                    <p>The food was absolutely amazing! Every dish was fresh, delicious, and full of flavor. The staff were very friendly, and the atmosphere made the whole experience even better. I will definitely come back again!</p>
                                    <span>Sarah Johnson</span>
                                  </Carousel.Caption>
                            </Carousel.Item>
                        <Carousel.Item>
                              <img src={user_02} alt="Michael Brown" />
                                  <Carousel.Caption>
                                    <p>I had a wonderful experience at this restaurant. The burger was perfectly cooked, and the fries were crispy and delicious. The service was quick, and everything was served fresh. Highly recommended!</p>
                                    <span>Michael Brown</span>
                                  </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                              <img src={user_03} alt="Daniel Wilson" />
                                  <Carousel.Caption>
                                    <p>I really enjoyed my visit! The menu offers a great variety of delicious meals, and everything I tried tasted fantastic. The prices were reasonable, and the staff made sure we had everything we needed</p>
                                    <span>Daniel Wilson</span>
                                  </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                              <img src={user_04} alt="Emily Davis" />
                                  <Carousel.Caption>
                                    <br />
                                    <p>This is one of the best restaurants I have visited. The food quality was excellent, and the presentation of every dish was beautiful. The place was clean, comfortable, and perfect for enjoying a meal with friends</p>
                                    <span>Emily Davis</span>
                                  </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                              <img src={user_05} alt="Olivia Martinez" />
                                  <Carousel.Caption>
                                    <br />
                                    <p>Absolutely loved the experience! The food was fresh, tasty, and prepared with great attention to detail. The atmosphere was relaxing, and the customer service was outstanding. I would recommend this restaurant to everyone!</p>
                                    <span>Olivia Martinez</span>
                                  </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                              <img src={user_06} alt="James Anderson" />
                                  <Carousel.Caption>
                                    <br />
                                    <p>I had an amazing dining experience at this restaurant! The pizza was delicious, the ingredients tasted fresh, and every bite was full of flavor. The staff were welcoming and professional, and I can't wait to visit again!</p>
                                    <span>James Anderson</span>
                                  </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                              <img src={user_07} alt="Sophia Williams" />
                                  <Carousel.Caption>
                                    <br />
                                    <p>The restaurant exceeded all my expectations! The food was incredibly delicious, fresh, and full of amazing flavors. I especially loved the quality of the ingredients and the friendly service. It was a wonderful dining experience, and I'll definitely be coming back!</p>
                                    <span>Sophia Williams</span>
                                  </Carousel.Caption>
                            </Carousel.Item>
                      </Carousel>
                </div>
              </div>
            </div>
      </section>

{/* FAQ Section */}
      <section id="faq" className="faq">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 col-md-12">
                            <h2>Frequently Asked Questions</h2>
                        </div>

                        <div className="col-lg-6 col-md-6 col-12">
                            <div className="faq-box">
                                <h5><span>~</span> Is Foodera Bread really baked fresh each day?</h5>
                                <p>
                                    Far far away, behind the word mountains, far from the countries Vokalia
                                    and Consonantia, there live the blind texts. Separated they live in
                                    Bookmarksgrove right at the coast of the Semantics, a large language.
                                </p>
                            </div>

                            <div className="faq-box">
                                <h5><span>~</span> Can I order your products online?</h5>
                                <p>
                                    Far far away, behind the word mountains, far from the countries Vokalia
                                    and Consonantia, there live the blind texts. Separated they live in
                                    Bookmarksgrove right at the coast of the Semantics, a large language.
                                </p>
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-6 col-12">
                            <div className="faq-box">
                                <h5><span>~</span> Do you bake breads containing animal fats or products?</h5>
                                <p>
                                    Far far away, behind the word mountains, far from the countries Vokalia
                                    and Consonantia, there live the blind texts. Separated they live in
                                    Bookmarksgrove right at the coast of the Semantics, a large language.
                                </p>
                            </div>

                            <div className="faq-box">
                                <h5><span>~</span> When are you opening a shop near me?</h5>
                                <p>
                                    Far far away, behind the word mountains, far from the countries Vokalia
                                    and Consonantia, there live the blind texts. Separated they live in
                                    Bookmarksgrove right at the coast of the Semantics, a large language.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
      </section>

{/* Fresh Bread Section */}
      <section className="fresh-bread">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-8 col-md-8 col-12">
                            <h2>Baked fresh daily by bakers with passion.</h2>
                        </div>

                        <div className="col-lg-4 col-md-4 col-12">
                            <button onClick={()=>{
                              document.getElementById("explore").scrollIntoView({
                                behavior:"smooth"
                              })
                            }}>Learn More</button>
                        </div>
                    </div>
                </div>
      </section>


{/* Newsletter Section */}
      <section id="Newsletter" className="newsletter">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 col-md-12">
                            <h2>
                                Hurry up! Subscribe our newsletter
                                <br />
                                and get 25% Off
                            </h2>

                            <p>Limited time offer for this month. No credit card required.</p>

                            <div className="newsletter-form">
                                <input onChange={(event)=>{setValueOfInput(event.target.value)}} value={valueOfInput} type="email" placeholder="Email Address here" />
                                <button onClick={()=>{setValueOfInput("")}}>Subscribe</button>
                            </div>
                        </div>
                    </div>
                </div>
      </section>


{/* Footer Section */}
      <footer className="footer">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 col-md-12">
                            <ul>
                                <li><a href="#Newsletter">Register</a></li>
                                <li><a href="#Review">Forum</a></li>
                                <li><a href="#explore">Affiliate</a></li>
                                <li><a href="#faq">FAQ</a></li>
                            </ul>

                            <p>
                              © {new Date().getFullYear()} Foodera. All rights reserved.</p>
                        </div>
                    </div>
                </div>
      </footer>
      </>
);
};

export default Home;
