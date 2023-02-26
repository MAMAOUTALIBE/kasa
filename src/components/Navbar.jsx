import React from 'react'
import "./Navbar.css"
import { Link} from "react-router-dom";

function Navbar() {
  return (
    <div className='navbar'>
        <img src="logo.png" alt="logo du site" />
        <Link to="/">
          <div>Acceuil</div>
       </Link>
       <Link to="/about">
          <div>A propos</div>
       </Link>
    </div>
  )
}

export default Navbar