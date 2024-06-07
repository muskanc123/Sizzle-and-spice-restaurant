import React, { useState } from 'react';
import Header from './Header';
import IsotopeReact from './MenuContent';
// import { menuList } from './menuList';
import menuList from "./menu.json"


function Menu() {
  const [filterKey, setFilterKey] = useState('*');

  const handleCartButtonClick = (id) => {
    const item = localStorage.getItem(id) // null
    console.log(item)
    let quantity = 0;
    if(item){
      quantity=parseInt(item)
    }
    quantity++;
    localStorage.setItem(id,quantity)
    alert("Item added to cart")

  };

  // Redirect to the cart route if redirectToCart is true
  

  const handleFilterClick = (filter) => {
    setFilterKey(filter);
  };



  return (
    <>
      <Header />
      <br />
      <br />
      {/* ======= Menu Section ======= */}
      <section id="menu" className="menu section-bg">
        <div className="container" data-aos="fade-up">
          <div className="section-title">
            <br />
            <br />
            <h2>Menu</h2>
            <p>Check Our Tasty Menu</p>
          </div>
          {/* <IsotopeReact filterKey={filterKey} /> */}
          <IsotopeReact filterKey={filterKey} setFilterKey={setFilterKey} />
          <div className="row" data-aos="fade-up" data-aos-delay={100}>
            <div className="col-lg-12 d-flex justify-content-center">
              <ul id="menu-flters">
                <li
                  onClick={() => handleFilterClick('*')}
                  className={filterKey === '*' ? 'filter-active' : ''}
                >
                  All
                </li>
                <li
                  onClick={() => handleFilterClick('filter-starters')}
                  className={filterKey === 'filter-starters' ? 'filter-active' : ''}
                >
                  Starters
                </li>
                <li
                  onClick={() => handleFilterClick('filter-salads')}
                  className={filterKey === 'filter-salads' ? 'filter-active' : ''}
                >
                  Salads
                </li>
                <li
                  onClick={() => handleFilterClick('filter-specialty')}
                  className={filterKey === 'filter-specialty' ? 'filter-active' : ''}
                >
                  Specialty
                </li>
              </ul>
            </div>
          </div>
          <div className="row menu-container" data-aos="fade-up" data-aos-delay={200}>
            {menuList.map((menuItem, index) => (
              <div className={`col-lg-6 menu-item filter-${menuItem.category}`} key={index}>
                <img src={menuItem.image} className="menu-img" alt={menuItem.name} />
                <div className="menu-content">
                  <a href="#">{menuItem.name}</a><span>Rs. {menuItem.price}</span>
                </div>
                <div className="menu-item-actions">
                  <button onClick={() => handleCartButtonClick(menuItem.id)} className="cart-btn scrollto d-none d-lg-flex">
                  <img src="src/assets/img/menu/image.png" alt="Cart" className="menu-cart-icon" />
                  </button>
                </div>

                <div className="menu-ingredients">
                  {menuItem.description}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* End Menu Section */}
      {/* Display Cart Component */}

      

    </>
  );
}

export default Menu;



