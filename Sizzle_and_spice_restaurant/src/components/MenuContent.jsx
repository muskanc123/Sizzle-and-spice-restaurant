import React, { useRef, useEffect } from 'react';
import Isotope from 'isotope-layout';

function IsotopeReact({ filterKey, setFilterKey }) {
  const isotope = useRef(null);
  const menuFilters = useRef([]);

  const initializeIsotope = () => {
    isotope.current = new Isotope('.menu-container', {
      itemSelector: '.menu-item',
      layoutMode: 'fitRows'
    });

    menuFilters.current = document.querySelectorAll('#menu-flters li');
    menuFilters.current.forEach((filter) => {
      filter.addEventListener('click', handleFilterClick);
    });
  };

  const handleFilterClick = (e) => {
    e.preventDefault();
    menuFilters.current.forEach((el) => {
      el.classList.remove('filter-active');
    });
    e.target.classList.add('filter-active');
    setFilterKey(e.target.getAttribute('data-filter'));
  };

  const arrangeIsotope = () => {
    if (isotope.current) {
      filterKey === '*'
        ? isotope.current.arrange({ filter: '*' })
        : isotope.current.arrange({ filter: `.${filterKey}` });
    }
  };

  useEffect(() => {
    initializeIsotope();

    return () => {
      menuFilters.current.forEach((filter) => {
        filter.removeEventListener('click', handleFilterClick);
      });
    };
  }, []);

  useEffect(() => {
    arrangeIsotope();
  }, [filterKey]);

  return null; // Return null if this component doesn't render any UI
}

export default IsotopeReact;
