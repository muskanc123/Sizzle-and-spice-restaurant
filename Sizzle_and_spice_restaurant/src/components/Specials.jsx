import React from 'react'
import Header from './Header';

function Specials() {
    return (
        <>
            <Header />
            <br />
            <br />
            {/* ======= Specials Section ======= */}
            <section id="specials" className="specials">
                <div className="container" data-aos="fade-up">
                    <div className="section-title">
                        <br />
                        <br />
                        <h2>Specials</h2>
                        <p>Check Our Specials</p>
                    </div>
                    <div className="row" data-aos="fade-up" data-aos-delay={100}>
                        <div className="col-lg-3">
                            <ul className="nav nav-tabs flex-column">
                                <li className="nav-item">
                                    <a className="nav-link active show" data-bs-toggle="tab" href="#tab-1">Risotto</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" data-bs-toggle="tab" href="#tab-2">Berry Bliss Symphony</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" data-bs-toggle="tab" href="#tab-3">Vietnamese Pho</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" data-bs-toggle="tab" href="#tab-4">Prosciutto-Wrapped Asparagus</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" data-bs-toggle="tab" href="#tab-5">Sushi Rolls</a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-lg-9 mt-4 mt-lg-0">
                            <div className="tab-content">
                                <div className="tab-pane active show" id="tab-1">
                                    <div className="row">
                                        <div className="col-lg-8 details order-2 order-lg-1">
                                            <h3>Risotto Dish: A Delightful Culinary Journey</h3>
                                            <p className="fst-italic">Indulge in a symphony of flavors that dance on your palate, as each bite of our Risotto Dish transports you to culinary bliss.</p>
                                            <p>Handcrafted with passion and precision, this dish is a harmonious blend of savory ingredients, meticulously selected to tantalize your taste buds.</p>
                                        </div>

                                        <div className="col-lg-4 text-center order-1 order-lg-2">
                                            <img src="src/assets/img/specials-1.png" className="img-fluid" />
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-pane" id="tab-2">
                                    <div className="row">
                                        <div className="col-lg-8 details order-2 order-lg-1">
                                            <h3>Berry Bliss Symphony: An Orchestra of Berries</h3>
                                            <p className="fst-italic">Immerse yourself in a medley of fruity delights with our Berry Bliss Symphony, where each spoonful is a harmonious blend of tangy and sweet.</p>
                                            <p>Crafted with precision, this symphony of berries offers a burst of freshness and flavor, elevating your dining experience to new heights.</p>
                                        </div>

                                        <div className="col-lg-4 text-center order-1 order-lg-2">
                                            <img src="src/assets/img/specials-2.png" className="img-fluid" />
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-pane" id="tab-3">
                                    <div className="row">
                                        <div className="col-lg-8 details order-2 order-lg-1">
                                            <h3>Pho: A Flavorful Vietnamese Delight</h3>
                                            <p className="fst-italic">Pho is a beloved Vietnamese noodle soup, renowned for its rich and aromatic broth.</p>
                                            <p>Loaded with tender slices of beef or chicken, fresh herbs, rice noodles, and a medley of spices, Pho is a culinary masterpiece that delights the senses.</p>
                                        </div>

                                        <div className="col-lg-4 text-center order-1 order-lg-2">
                                            <img src="src/assets/img/specials-3.png" className="img-fluid" />
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-pane" id="tab-4">
                                    <div className="row">
                                        <div className="col-lg-8 details order-2 order-lg-1">
                                            <h3>Prosciutto-Wrapped Asparagus: A Delicate Delight</h3>
                                            <p className="fst-italic">Savor the exquisite flavors of prosciutto and asparagus in this delectable appetizer.</p>
                                            <p>Tender asparagus spears lovingly wrapped in thin slices of savory prosciutto, baked to perfection, and served with a drizzle of balsamic glaze. Each bite offers a perfect balance of salty, savory, and sweet, making it an irresistible treat for any occasion.</p>
                                        </div>

                                        <div className="col-lg-4 text-center order-1 order-lg-2">
                                            <img src="src/assets/img/specials-4.png" className="img-fluid" />
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-pane" id="tab-5">
                                    <div className="row">
                                        <div className="col-lg-8 details order-2 order-lg-1">
                                            <h3>Savor the Delight of Sushi Rolls: A Culinary Journey</h3>
                                            <p className="fst-italic">Indulge in the exquisite flavors of fresh fish and rice, expertly rolled into bite-sized delights.</p>
                                            <p>Each sushi roll is a culinary masterpiece, combining the finest ingredients such as tuna, salmon, avocado, and cucumber, wrapped in delicate seaweed and served with soy sauce and wasabi. Whether you prefer traditional maki rolls or adventurous specialty rolls, sushi is a delightful treat for the senses.</p>
                                        </div>

                                        <div className="col-lg-4 text-center order-1 order-lg-2">
                                            <img src="src/assets/img/specials-5.png" className="img-fluid" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>{/* End Specials Section */}

        </>



    )
}
export default Specials;
