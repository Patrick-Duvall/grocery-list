import React from 'react'

const Grocery = ({ name, quantity, purchased, starred, onPurchase, onStar, onDelete}) => {
  return ( 
    <article className={`Grocery ${starred && 'starred'}`}>
      <h3>{name}</h3>
      <p>quantity: {quantity}</p>
    </article>
  )
}

export default Grocery;