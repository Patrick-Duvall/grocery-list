import React, { useState } from 'react'
import './Grocery.css'

const Grocery = ({ name, quantity, notes, purchased, starred, onPurchase, onStar, onDelete, id}) => {

  return ( 
    <article key={id} className={`Grocery ${starred && 'starred'} ${purchased && 'purchased'}`}>
      <h3>{name}</h3>
      <p>quantity: {quantity}</p>
      <p>{notes}</p>
      <button className='Grocery-purchase' onClick={() => onPurchase(id)}>
        {purchased ? 'Unpurchase' : 'Purchase'}
      </button>
      <button className='Grocery-star' onClick={() => onStar(id)}>
        {starred ? 'Unstar' : 'Star'}
      </button>
      <button className='Grocery-delete' onClick={() => onDelete(id)}>
        Remove
      </button>
    </article>
  )
}

export default Grocery;