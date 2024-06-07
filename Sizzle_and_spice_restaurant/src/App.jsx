
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './components/Home'
import TopBar from './components/TopBar'
import About from './components/About'
import Menu from './components/Menu'
import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Specials from './components/Specials'
import Contacts from './components/Contacts'
import BookTable from './components/BookTable'
import Cart from './components/Cart'

function App() {

  return (
   
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<HomePage />} > */}
        <Route path="/" element={<Home />} >
        </Route>
        <Route path="about" element={<About />} />
        <Route path="menu" element={<Menu />} />
        <Route path="specials" element={<Specials />} />
        <Route path="contacts" element={<Contacts />} />
        <Route path="book-a-table" element={<BookTable />} />
        <Route path="cart" element={<Cart />} />
        <Route path="footer" element={<Footer />} />




        {/* <Route path="contact" element={<Contact />} />
        <Route path="blogs" element={<Blog />} /> */}



      </Routes>
    </BrowserRouter>
  )

}

export default App
