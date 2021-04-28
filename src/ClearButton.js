import React from 'react'
import './ClearButton.css'

const ClearButton = ({groceries, clearGroceries}) => {
  return (
    <button
      disabled={ !groceries.length} 
      className={`clear-button ${!groceries.length && 'disabled'}`}
      onClick={ () => clearGroceries() }>
      Clear Groceries
    </button>
  )
}

export default ClearButton