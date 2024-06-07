import React from 'react'
import emailjs from '@emailjs/browser';
import { useRef } from 'react';
import Header from './Header';

function BookTable() {
    const form = useRef();

    const sendEmail = (e) => {    
        e.preventDefault();
    
        emailjs
          .sendForm('service_zzq9ztg', 'template_19onhdp', form.current, {
            publicKey: '-Murfbl_IA_J19OSZ',
          })
          .then(
            () => {
              console.log('SUCCESS!');
              alert("Your booking request was sent. We will call back or send an Email to confirm your reservation. Thank you!")
            },
            (error) => {
              console.log('FAILED...', error.text);
              alert("Error")
            },
          );
      };
    return (
        <>
          <Header />
            {/* ======= Book A Table Section ======= */}
            <section id="book-a-table" className="book-a-table">
                <div className="container" data-aos="fade-up">
                    <div className="section-title">
                        <h2>Reservation</h2>
                        <p>Book a Table</p>
                    </div>
                    <form ref={form} onSubmit={sendEmail} className="php-email-form" data-aos="fade-up" data-aos-delay={100}>
                        <div className="row">
                            <div className="col-lg-4 col-md-6 form-group">
                                <input type="text" name="from_name" className="form-control" id="name" placeholder="Your Name" data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
                                <div className="validate" />
                            </div>
                            <div className="col-lg-4 col-md-6 form-group mt-3 mt-md-0">
                                <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" data-rule="email" data-msg="Please enter a valid email" />
                                <div className="validate" />
                            </div>
                            <div className="col-lg-4 col-md-6 form-group mt-3 mt-md-0">
                                <input type="text" className="form-control" name="number" id="phone" placeholder="Your Phone" data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
                                <div className="validate" />
                            </div>
                            <div className="col-lg-4 col-md-6 form-group mt-3">
                                <input type="text" name="booking_date" className="form-control" id="date" placeholder="Date" data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
                                <div className="validate" />
                            </div>
                            <div className="col-lg-4 col-md-6 form-group mt-3">
                                <input type="text" className="form-control" name="booking_time" id="time" placeholder="Time" data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
                                <div className="validate" />
                            </div>
                            <div className="col-lg-4 col-md-6 form-group mt-3">
                                <input type="number" className="form-control" name="no_of_guest" id="people" placeholder="# of people" data-rule="minlen:1" data-msg="Please enter at least 1 chars" />
                                <div className="validate" />
                            </div>
                        </div>
                        <div className="form-group mt-3">
                            <textarea className="form-control" name="message" rows={5} placeholder="Message" defaultValue={""} />
                            <div className="validate" />
                        </div>
                        <div className="mb-3">
                            <div className="loading">Loading</div>
                            <div className="error-message" />
                            <div className="sent-message">Your booking request was sent. We will call back or send an Email to confirm your reservation. Thank you!</div>
                        </div>
                        <div className="text-center"><button type="submit">Book a Table</button></div>
                    </form>
                </div>
            </section>{/* End Book A Table Section */}


        </>
    )
}

export default BookTable;
