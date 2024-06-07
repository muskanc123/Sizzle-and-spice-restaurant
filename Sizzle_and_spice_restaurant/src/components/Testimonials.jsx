//  import React from 'react'
//  import React, { useEffect } from 'react';
//  import Swiper from 'swiper';

  

//  function Testimonials() {
//      useEffect(() => {
//          new Swiper('.testimonials-slider', {
//              speed: 600,
//              loop: true,
//              autoplay: {
//                delay: 5000,
//                disableOnInteraction: false
//              },
//              slidesPerView: 'auto',
//              pagination: {
//                el: '.swiper-pagination',
//                type: 'bullets',
//                clickable: true
//              },
//              breakpoints: {
//                320: {
//                  slidesPerView: 1,
//                  spaceBetween: 20
//                },
        
//                1200: {
//                  slidesPerView: 3,
//                  spaceBetween: 20
//                }
//              }
//            });
//          });
//    return (
//      <>
//      {/* <!-- ======= Testimonials Section ======= --> */}
//     <section id="testimonials" className="testimonials section-bg">
//    <div className="container" data-aos="fade-up">
//      <div className="section-title">
//        <h2>Testimonials</h2>
//        <p>What they're saying about us</p>
//      </div>
//      <div className="testimonials-slider swiper" data-aos="fade-up" data-aos-delay={100}>
//        <div className="swiper-wrapper">
//          <div className="swiper-slide">
//            <div className="testimonial-item">
//              <p>
//                <i className="bx bxs-quote-alt-left quote-icon-left" />
//                Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.
//                <i className="bx bxs-quote-alt-right quote-icon-right" />
//              </p>
//              <img src="src/assets/img/testimonials/testimonials-1.jpg" className="testimonial-img" alt />
//              <h3>Saul Goodman</h3>
//              <h4>Ceo &amp; Founder</h4>
//            </div>
//          </div>{/* End testimonial item */}
//          <div className="swiper-slide">
//            <div className="testimonial-item">
//              <p>
//                <i className="bx bxs-quote-alt-left quote-icon-left" />
//                Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid cillum eram malis quorum velit fore eram velit sunt aliqua noster fugiat irure amet legam anim culpa.
//                <i className="bx bxs-quote-alt-right quote-icon-right" />
//              </p>
//              <img src="src/assets/img/testimonials/testimonials-2.jpg" className="testimonial-img" alt />
//              <h3>Sara Wilsson</h3>
//              <h4>Designer</h4>
//            </div>
//          </div>{/* End testimonial item */}
//          <div className="swiper-slide">
//            <div className="testimonial-item">
//              <p>
//                <i className="bx bxs-quote-alt-left quote-icon-left" />
//                Enim nisi quem export duis labore cillum quae magna enim sint quorum nulla quem veniam duis minim tempor labore quem eram duis noster aute amet eram fore quis sint minim.
//                <i className="bx bxs-quote-alt-right quote-icon-right" />
//              </p>
//              <img src="src/assets/img/testimonials/testimonials-3.jpg" className="testimonial-img" alt />
//              <h3>Jena Karlis</h3>
//              <h4>Store Owner</h4>
//            </div>
//          </div>{/* End testimonial item */}
//          <div className="swiper-slide">
//            <div className="testimonial-item">
//              <p>
//                <i className="bx bxs-quote-alt-left quote-icon-left" />
//                Fugiat enim eram quae cillum dolore dolor amet nulla culpa multos export minim fugiat minim velit minim dolor enim duis veniam ipsum anim magna sunt elit fore quem dolore labore illum veniam.
//                <i className="bx bxs-quote-alt-right quote-icon-right" />
//              </p>
//              <img src="src/assets/img/testimonials/testimonials-4.jpg" className="testimonial-img" alt />
//              <h3>Matt Brandon</h3>
//              <h4>Freelancer</h4>
//            </div>
//          </div>{/* End testimonial item */}
//          <div className="swiper-slide">
//            <div className="testimonial-item">
//              <p>
//                <i className="bx bxs-quote-alt-left quote-icon-left" />
//                Quis quorum aliqua sint quem legam fore sunt eram irure aliqua veniam tempor noster veniam enim culpa labore duis sunt culpa nulla illum cillum fugiat legam esse veniam culpa fore nisi cillum quid.
//                <i className="bx bxs-quote-alt-right quote-icon-right" />
//              </p>
//              <img src="src/assets/img/testimonials/testimonials-5.jpg" className="testimonial-img" alt />
//              <h3>John Larson</h3>
//              <h4>Entrepreneur</h4>
//            </div>
//          </div>{/* End testimonial item */}
//        </div>
//        <div className="swiper-pagination" />
//      </div>
//    </div>
//  </section>{/* End Testimonials Section */}

    
    
//      </>
//    )
//  }

//  export default Testimonials

//  import React, { useEffect } from 'react';
//  import Swiper from 'react-id-swiper';
//  import SwiperCore, { Pagination } from 'swiper';
//  import '../assets/vendor/swiper/swiper-bundle.min.css';
//   import '../assets/vendor/swiper/swiper-bundle.min.js';


//  function Testimonials() {
//      useEffect(() => {
//          new Swiper('.testimonials-slider', {
//              speed: 600,
//              loop: true,
//              autoplay: {
//                delay: 5000,
//                disableOnInteraction: false
//              },
//              slidesPerView: 'auto',
//              pagination: {
//                el: '.swiper-pagination',
//                type: 'bullets',
//                clickable: true
//              },
//              scrollbar: {
//                  el: '.swiper-scrollbar',
//              },
//              breakpoints: {
//                320: {
//                  slidesPerView: 1,
//                  spaceBetween: 20
//                },
        
//                1200: {
//                  slidesPerView: 3,
//                  spaceBetween: 20
//                }
//              }
//            });
//      }, []);

//      return (
//          <>
//              {/* <!-- ======= Testimonials Section ======= --> */}
//              <section id="testimonials" className="testimonials section-bg">
//                  <div className="container" data-aos="fade-up">
//                      <div className="section-title">
//                          <h2>Testimonials</h2>
//                          <p>What they're saying about us</p>
//                      </div>
//                      <div className="testimonials-slider swiper" data-aos="fade-up" data-aos-delay={100}>
//                      <div className="swiper-wrapper">
//          <div className="swiper-slide">
//            <div className="testimonial-item">
//              <p>
//                <i className="bx bxs-quote-alt-left quote-icon-left" />
//                Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.
//                <i className="bx bxs-quote-alt-right quote-icon-right" />
//              </p>
//              <img src="src/assets/img/testimonials/testimonials-1.jpg" className="testimonial-img" alt />
//              <h3>Saul Goodman</h3>
//              <h4>Ceo &amp; Founder</h4>
//            </div>
//          </div>{/* End testimonial item */}
//          <div className="swiper-slide">
//            <div className="testimonial-item">
//              <p>
//                <i className="bx bxs-quote-alt-left quote-icon-left" />
//                Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid cillum eram malis quorum velit fore eram velit sunt aliqua noster fugiat irure amet legam anim culpa.
//                <i className="bx bxs-quote-alt-right quote-icon-right" />
//              </p>
//              <img src="src/assets/img/testimonials/testimonials-2.jpg" className="testimonial-img" alt />
//              <h3>Sara Wilsson</h3>
//              <h4>Designer</h4>
//            </div>
//          </div>{/* End testimonial item */}
//          <div className="swiper-slide">
//            <div className="testimonial-item">
//              <p>
//                <i className="bx bxs-quote-alt-left quote-icon-left" />
//                Enim nisi quem export duis labore cillum quae magna enim sint quorum nulla quem veniam duis minim tempor labore quem eram duis noster aute amet eram fore quis sint minim.
//                <i className="bx bxs-quote-alt-right quote-icon-right" />
//              </p>
//              <img src="src/assets/img/testimonials/testimonials-3.jpg" className="testimonial-img" alt />
//              <h3>Jena Karlis</h3>
//              <h4>Store Owner</h4>
//            </div>
//          </div>{/* End testimonial item */}
//          <div className="swiper-slide">
//            <div className="testimonial-item">
//              <p>
//                <i className="bx bxs-quote-alt-left quote-icon-left" />
//                Fugiat enim eram quae cillum dolore dolor amet nulla culpa multos export minim fugiat minim velit minim dolor enim duis veniam ipsum anim magna sunt elit fore quem dolore labore illum veniam.
//                <i className="bx bxs-quote-alt-right quote-icon-right" />
//              </p>
//              <img src="src/assets/img/testimonials/testimonials-4.jpg" className="testimonial-img" alt />
//              <h3>Matt Brandon</h3>
//              <h4>Freelancer</h4>
//            </div>
//          </div>{/* End testimonial item */}
//          <div className="swiper-slide">
//            <div className="testimonial-item">
//              <p>
//                <i className="bx bxs-quote-alt-left quote-icon-left" />
//                Quis quorum aliqua sint quem legam fore sunt eram irure aliqua veniam tempor noster veniam enim culpa labore duis sunt culpa nulla illum cillum fugiat legam esse veniam culpa fore nisi cillum quid.
//                <i className="bx bxs-quote-alt-right quote-icon-right" />
//              </p>
//              <img src="src/assets/img/testimonials/testimonials-5.jpg" className="testimonial-img" alt />
//              <h3>John Larson</h3>
//              <h4>Entrepreneur</h4>
//            </div>
//          </div>{/* End testimonial item */}
//        </div>
//                          <div className="swiper-pagination" ></div>
//                          <div className="swiper-pagination"></div>
//                          <div className="swiper-scrollbar"></div>

//                      </div>
//                  </div>
//              </section>{/* End Testimonials Section */}
//          </>
//      );
//  }

//  export default Testimonials;

import { Navigation, Pagination, Scrollbar } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

 import '../assets/vendor/swiper/swiper-bundle.min.css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

function Testimonials(){
  return (
    <Swiper
      modules={[ Pagination]}
      spaceBetween={50}
      slidesPerView={3}
      
      pagination={{ clickable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      <section id="testimonials" className="testimonials section-bg">
               <div className="container" data-aos="fade-up">
                     <div className="section-title">
                         <h2>Testimonials</h2>
                         <p>What they're saying about us</p>
                     </div>
                     <div className="testimonials-slider swiper" data-aos="fade-up" data-aos-delay={100}>
                     <div className="swiper-wrapper">
         <div className="swiper-slide">
           <div className="testimonial-item">
             <p>
               <i className="bx bxs-quote-alt-left quote-icon-left" />
               Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.
               <i className="bx bxs-quote-alt-right quote-icon-right" />
             </p>
             <img src="src/assets/img/testimonials/testimonials-1.jpg" className="testimonial-img" alt />
             <h3>Saul Goodman</h3>
             <h4>Ceo &amp; Founder</h4>
           </div>
         </div>{/* End testimonial item */}
         <div className="swiper-slide">
           <div className="testimonial-item">
             <p>
               <i className="bx bxs-quote-alt-left quote-icon-left" />
               Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid cillum eram malis quorum velit fore eram velit sunt aliqua noster fugiat irure amet legam anim culpa.
               <i className="bx bxs-quote-alt-right quote-icon-right" />
             </p>
             <img src="src/assets/img/testimonials/testimonials-2.jpg" className="testimonial-img" alt />
             <h3>Sara Wilsson</h3>
             <h4>Designer</h4>
           </div>
         </div>{/* End testimonial item */}
         <div className="swiper-slide">
           <div className="testimonial-item">
             <p>
               <i className="bx bxs-quote-alt-left quote-icon-left" />
               Enim nisi quem export duis labore cillum quae magna enim sint quorum nulla quem veniam duis minim tempor labore quem eram duis noster aute amet eram fore quis sint minim.
               <i className="bx bxs-quote-alt-right quote-icon-right" />
             </p>
             <img src="src/assets/img/testimonials/testimonials-3.jpg" className="testimonial-img" alt />
             <h3>Jena Karlis</h3>
             <h4>Store Owner</h4>
           </div>
         </div>{/* End testimonial item */}
         <div className="swiper-slide">
           <div className="testimonial-item">
             <p>
               <i className="bx bxs-quote-alt-left quote-icon-left" />
               Fugiat enim eram quae cillum dolore dolor amet nulla culpa multos export minim fugiat minim velit minim dolor enim duis veniam ipsum anim magna sunt elit fore quem dolore labore illum veniam.
               <i className="bx bxs-quote-alt-right quote-icon-right" />
             </p>
             <img src="src/assets/img/testimonials/testimonials-4.jpg" className="testimonial-img" alt />
             <h3>Matt Brandon</h3>
             <h4>Freelancer</h4>
           </div>
         </div>{/* End testimonial item */}
         <div className="swiper-slide">
           <div className="testimonial-item">
             <p>
               <i className="bx bxs-quote-alt-left quote-icon-left" />
               Quis quorum aliqua sint quem legam fore sunt eram irure aliqua veniam tempor noster veniam enim culpa labore duis sunt culpa nulla illum cillum fugiat legam esse veniam culpa fore nisi cillum quid.
               <i className="bx bxs-quote-alt-right quote-icon-right" />
             </p>
             <img src="src/assets/img/testimonials/testimonials-5.jpg" className="testimonial-img" alt />
             <h3>John Larson</h3>
             <h4>Entrepreneur</h4>
           </div>
         </div>{/* End testimonial item */}
       </div>
                         <div className="swiper-pagination" ></div>
                         <div className="swiper-pagination"></div>
                         <div className="swiper-scrollbar"></div>

                     </div>
                 </div>
             </section>{/* End Testimonials Section */}
         
    </Swiper>
  );
};
export default Testimonials;