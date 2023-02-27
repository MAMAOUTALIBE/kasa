import React from 'react'
import "./AppartementGrid.css"
import Appartement from './Appartement'
function AppartementGrid() {
  return (
    <div className='grid'>
        <Appartement />
        <Appartement />
        <Appartement />
        <Appartement />

    </div>
  );
}

export default AppartementGrid;