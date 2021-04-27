import React, {Component} from 'react'
import Grocery from './Grocery'
import GroceryForm from './GroceryForm'
import './App.css';

class App extends Component {

  constructor() {
    super()
    this.state = {
      groceries: []
    }
  }

  addGrocery = (grocery) => {
    const newGrocery = {...grocery, starred: false} 
    this.setState({groceries: [...this.state.groceries, newGrocery]})
  };

  groceryList = () => {
    return this.state.groceries.map(grocery => {
     return <Grocery
     onPurchase={this.onPurchase}
     onStar={this.onStar}
     onDelete={this.onDelete}
     {...grocery} />}
    )
  }

  onPurchase = (id) => {
    console.log('hurray');
  }

  onStar = (id) => {

  }

  onDelete = (id) => {
    let filteredGroceries = this.state.groceries.filter(grocery => grocery.id != id)
    this.setState({groceries: filteredGroceries})
  }

  render () {
    return (
      <div >
        <h1> Grocery List</h1>
        <GroceryForm addGrocery ={this.addGrocery} />
        { this.groceryList() }
      </div>
    );
  }
}

export default App;
