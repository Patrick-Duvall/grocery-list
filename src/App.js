import React, {Component} from 'react'
import Grocery from './Grocery'
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
    this.state.groceries.map(grocery => <Grocery {...grocery} />)
  }

  render () {
    return (
      <div>
        <GroceryForm addGrocery ={this.addGrocery} />
        { this.groceryList() }
      </div>
    );
  }
}

export default App;
