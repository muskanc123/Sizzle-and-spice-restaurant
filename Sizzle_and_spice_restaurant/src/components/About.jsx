import React from 'react'
import Header from './Header';
// import Footer from './Footer';

function About() {
    return (
        <>
            <Header />
            <br />
            <br />
            {/* ======= About Section ======= */}
            <section id="about" className="about">
                <div className="container" data-aos="fade-up">
                    <div className="row">
                        <div className="col-lg-6 order-1 order-lg-2" data-aos="zoom-in" data-aos-delay={100}>
                            <br />
                            <br />
                            <div className="about-img">
                                <img src="src/assets/img/about.jpg" />
                            </div>
                        </div>
                        {/* <div className="col-lg-6 pt-4 pt-lg-0 order-2 order-lg-1 content">
                            <br />
                            <br />
                            <h3>Voluptatem dignissimos provident quasi corporis voluptates sit assumenda.</h3>
                            <p className="fst-italic">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                                magna aliqua.
                            </p>
                            <ul>
                                <li><i className="bi bi-check-circle" /> Ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
                                <li><i className="bi bi-check-circle" /> Duis aute irure dolor in reprehenderit in voluptate velit.</li>
                                <li><i className="bi bi-check-circle" /> Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate trideta storacalaperda mastiro dolore eu fugiat nulla pariatur.</li>
                            </ul>
                            <p>
                                Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                                velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                culpa qui officia deserunt mollit anim id est laborum
                            </p>
                        </div> */}
                        <div className="col-lg-6 pt-4 pt-lg-0 order-2 order-lg-1 content">
                            <br />
                            <br />
                            <h3>Indulge in Culinary Bliss at Sizzle and Spice Restaurant</h3>
                            <p className="fst-italic">
                                At Sizzle and Spice, we elevate dining to an art form, crafting each dish with passion and precision to ignite your taste buds and tantalize your senses.
                            </p>
                            <ul>
                                <li><i className="bi bi-check-circle" /> Immerse yourself in a symphony of flavors, where every bite is a celebration of culinary excellence.</li>
                                <li><i className="bi bi-check-circle" /> Experience the perfect harmony of sizzling grills and aromatic spices, carefully curated to delight discerning palates.</li>
                                <li><i className="bi bi-check-circle" /> Our commitment to quality shines through in every dish, as we source the freshest ingredients and infuse them with our signature flair.</li>
                            </ul>
                            <p>
                                From sizzling steaks to exotic spices, our menu offers a gastronomic journey like no other. Step into our culinary haven and embark on an unforgettable dining experience that will leave you craving for more.
                            </p>
                        </div>
                    </div>
                </div>
            </section>{/* End About Section */}
            {/* <Footer/> */}

        </>
    )
}
export default About;
