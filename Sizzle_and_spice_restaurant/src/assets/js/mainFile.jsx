import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

const Restaurantly = () => {
  const [navbarlinks, setNavbarLinks] = useState([]);
  const [headerScrolled, setHeaderScrolled] = useState(false);
  const [backToTopActive, setBackToTopActive] = useState(false);

  useEffect(() => {
    // Navbar links active state on scroll
    const navbarlinksActive = () => {
      let position = window.scrollY + 200;
      navbarlinks.forEach((navbarlink) => {
        if (!navbarlink.hash) return;
        let section = document.querySelector(navbarlink.hash);
        if (!section) return;
        if (position >= section.offsetTop && position <= section.offsetTop + section.offsetHeight) {
          navbarlink.classList.add('active');
        } else {
          navbarlink.classList.remove('active');
        }
      });
    };

    // Toggle .header-scrolled class to #header when page is scrolled
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setHeaderScrolled(true);
      } else {
        setHeaderScrolled(false);
      }

      if (window.scrollY > 100) {
        setBackToTopActive(true);
      } else {
        setBackToTopActive(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup on unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [navbarlinks]);

  useEffect(() => {
    // Easy selector helper function
    const select = (el, all = false) => {
      el = el.trim();
      if (all) {
        return [...document.querySelectorAll(el)];
      } else {
        return document.querySelector(el);
      }
    };

    setNavbarLinks(select('#navbar .scrollto', true));

    // Menu isotope and filter
    let menuContainer = select('.menu-container');
    if (menuContainer) {
      let menuIsotope = new Isotope(menuContainer, {
        itemSelector: '.menu-item',
        layoutMode: 'fitRows',
      });

      let menuFilters = select('#menu-flters li', true);

      menuFilters.forEach(filter => {
        filter.addEventListener('click', function () {
          menuFilters.forEach(f => f.classList.remove('filter-active'));
          this.classList.add('filter-active');
          menuIsotope.arrange({ filter: this.getAttribute('data-filter') });
        });
      });
    }

    // Initiate glightbox
    GLightbox({ selector: '.glightbox' });

    // Events slider
    new Swiper('.events-slider', {
      speed: 600,
      loop: true,
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
      },
      slidesPerView: 'auto',
      pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true,
      },
    });

    // Testimonials slider
    new Swiper('.testimonials-slider', {
      speed: 600,
      loop: true,
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
      },
      slidesPerView: 'auto',
      pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true,
      },
      breakpoints: {
        320: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        1200: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
      },
    });

    // Initiate gallery lightbox
    GLightbox({ selector: '.gallery-lightbox' });

    // Animation on scroll
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      mirror: false,
    });
  }, []);

  const scrollTo = (el) => {
    let headerOffset = document.querySelector('#header').offsetHeight;
    let elementPos = document.querySelector(el).offsetTop;
    window.scrollTo({ top: elementPos - headerOffset, behavior: 'smooth' });
  };

  const handleBackToTop = () => {
    scrollTo('body');
  };

  return (
    <div>
      {/* Navbar */}
      <nav id="navbar">
        <ul>
          <li className="scrollto">Home</li>
          <li className="scrollto">About</li>
          <li className="scrollto">Menu</li>
          <li className="scrollto">Gallery</li>
          <li className="scrollto">Contact</li>
        </ul>
      </nav>

      {/* Header */}
      <header id="header" className={headerScrolled ? 'header-scrolled' : ''}>
        {/* Header Content */}
      </header>

      {/* Back to Top Button */}
      <div
        className={`back-to-top ${backToTopActive ? 'active' : ''}`}
        onClick={handleBackToTop}
      >
        <i className="bi bi-arrow-up"></i>
      </div>
    </div>
  );
};

export default Restaurantly;