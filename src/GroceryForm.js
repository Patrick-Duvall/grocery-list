import { render } from '@testing-library/react'
import React, { Component } from 'react'
import './GroceryForm.css'

class GroceryForm extends Component {
  constructor() {
    super()
    this.state = {
      name: '',
      quantity: '',
      notes: ''
    }
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value})
  }

  submitGrocery = e => {
    e.preventDefault()
    const newGrocery = {
      id: Date.now(),
      ...this.state
    }
    this.props.addGrocery(newGrocery)
    this.clearInputs()
  }

  clearInputs = () => {
    this.setState({name: '', quantity: '', notes: ''})
  }

  render() {
    return(
      <form className='grocery-form'>
        <label htmlFor='name'>Name</label>
        <input
          type='text'
          placeholder='name'
          name='name'
          value={this.state.name}
          onChange={e => this.handleChange(e)}
        />

        <label htmlFor='quantity'>Quantity</label>
        <input
          type='text'
          placeholder='quantity'
          name='quantity'
          value={this.state.quantity}
          onChange={ e => this.handleChange(e)}
        />

        <label htmlFor='notes'>Notes</label>
        <input
          type='text'
          placeholder='notes'
          name='notes'
          value={this.state.notes}
          onChange={ e => this.handleChange(e)}
        />

        <button className='Grocery-submit' onClick={ e => this.submitGrocery(e)}>Create Item</button>
      </form>
    ) 
  }
}

export default GroceryForm