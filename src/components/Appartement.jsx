import React from 'react'
import "./Appartement.css"
import { Link } from "react-router-dom";
function Appartement() {
  return (
    <div className='appartement'>
      <Link to="/flat">
        <div className='appartement__subtitle'>titre de la location</div>
      </Link>
    </div>
  )
}

export default Appartement