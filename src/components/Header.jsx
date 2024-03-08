import React from 'react'
import { NavLink } from 'react-router-dom'
import Login from './buttons/Login'
import Signup from './buttons/Signup'
import CartBtn from './buttons/CartBtn'

const Header = () => {

  return (
    <>
    
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid py-2">
    
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">

      <ul class="navbar-nav me-auto mb-2 mb-lg-0">

        <li class="nav-item">
          <NavLink className="nav-link" aria-current="page" to="/">Home</NavLink>
        </li>

        <li class="nav-item">
          <NavLink className="nav-link" to="/products">Product</NavLink>
        </li>

        <li class="nav-item">
          <NavLink className="nav-link" to="/about">About</NavLink>
        </li>

        <li class="nav-item">
          <NavLink className="nav-link" to="/contact">Contact</NavLink>
        </li>      
        
      </ul>
      
    <NavLink className="navbar-brand mx-auto fw-bold" to="/">APPLE MART</NavLink>
    <Login/>
    <Signup/>
    <CartBtn />

    </div>
    
  </div>

</nav>

    </>
  )
}

export default Header