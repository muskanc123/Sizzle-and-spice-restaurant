import menuList from "./menu.json"
import Header from "./Header";
import Footer from "./Footer";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';
import React, { useState, useEffect } from 'react';


function Cart() {
  const [totalPrice, setTotalPrice] = useState(0); // Initialize totalPrice state variable
  const [cart, setCart] = useState([])


  function computeCart() {
    const tempCart = [];
      let totalPrice = 0
      const localStorageItems = { ...localStorage }
      console.log(menuList)
      for (let item of menuList) {
        for (let id in localStorageItems) {
          if (id == item.id) {
            item.quantity = localStorageItems[id]
            tempCart.push(item)
            totalPrice += item.quantity * item.price
          }
        }
      }
    setCart(tempCart);
    setTotalPrice(totalPrice)
  }
  useEffect(() => {
    computeCart();
  }, []); // Empty dependency array ensures the effect runs only once when the component mounts

  // useEffect(() => {
  //   computeCart();
  // }, [menuList]);


  function handleDecrement(index) {
    console.log(index);
    console.log(cart[index]);
    let quantity = cart[index].quantity
    quantity--;
    const id = cart[index].id
    if (quantity == 0) {
      alert("Item has been removed from the cart.")
      localStorage.removeItem(id)
      return
    }
    localStorage.setItem(id, quantity)
    computeCart()
  }

  function handleIncrement(index) {
    let quantity = cart[index].quantity
    quantity++;
    const id = cart[index].id
    localStorage.setItem(id, quantity)
    computeCart()
  }


  console.log(cart)

  return (
    <>
      <Header />
      <br />
      <br />
      {/* ======= Cart Section ======= */}
      <div className="container" data-aos="fade-up">
        <div className="section-title">
          <br />
          <br />
          <p style={{ fontWeight: 'bold' }}>Order Items</p>
        </div>

        <table className="cart-table">
          <thead>
            <tr >
              <th>Image</th>
              <th>Name</th>
              <th>Quantity</th>
              <th>Price</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((item, index) => (
              <tr key={item.id}>
                <td><img src={item.image} alt={item.name} className="cart-item-image" /></td>
                <td>{item.name}</td>
                {/* <td>{item.quantity}</td> */}
                <td>
                  <button className="round-button" onClick={() => handleDecrement(index)}><FontAwesomeIcon icon={faMinus} /></button>
                  &nbsp; {item.quantity} &nbsp;
                  <button className="round-button" onClick={() => handleIncrement(index)}><FontAwesomeIcon icon={faPlus} /></button>
                </td>
                <td>Rs. {item.price}</td>
                <td>Rs. {(item.quantity * item.price).toFixed(2)}</td>
              </tr>

            ))}
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td style={{ color: '#cda45e', fontWeight: 'bold' }}>TOTAL PRICE</td>
              <td style={{ color: '#cda45e', fontWeight: 'bold' }}>Rs. {totalPrice.toFixed(2)}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>

  );

}

export default Cart;


