import React from 'react'
import TopBar from './TopBar';
import Header from './Header';
import About from './About';
import Menu from './Menu';
import Specials from './Specials';
import Footer from './Footer';
import BookTable from './BookTable';
function Home() {
    return (
        <>
            {/* ======= Hero Section ======= */}
            <TopBar />
            <Header />
            <section id="hero" className="d-flex align-items-center">
                <div className="container position-relative text-center text-lg-start" data-aos="zoom-in" data-aos-delay={100}>
                    <div className="row">
                        <div className="col-lg-8">
                            <h1>Welcome to <span>our Restaurant</span></h1>
                            <h2>Delivering great food for more than 18 years!</h2>
                            <div className="btns">
                                <a href="#menu" className="btn-menu animated fadeInUp scrollto">Our Menu</a>
                                <a href="#book-a-table" className="btn-book animated fadeInUp scrollto">Book a Table</a>
                            </div>
                        </div>
                        <div className="col-lg-4 d-flex align-items-center justify-content-center position-relative" data-aos="zoom-in" data-aos-delay={200}>
                            <a href="https://www.youtube.com/watch?v=u6BOC7CDUTQ" className="glightbox play-btn" />
                        </div>
                    </div>
                </div>
            </section>{/* End Hero */}
            <Header />
            <About />
            <Menu />
            <Specials />
            <hr />
            <BookTable/>
            <Footer />







        </>
    )
}
export default Home;
