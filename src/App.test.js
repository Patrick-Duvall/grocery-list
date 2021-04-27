import { shallow } from "enzyme"
import App from './App'
import Grocery from './Grocery'
import GroceryForm from './GroceryForm'

describe('App', () => {
  it('should update the state with a grocery when addGrocery is called', () => {
    const wrapper = shallow(<App />)
    const mockGrocery = {name: 'apples', quantity: '10'}
    const expected = [{name: 'apples', quantity: '10', starred: false}]

    wrapper.instance().addGrocery(mockGrocery)

    expect(wrapper.instance().state.groceries).toEqual(expected)
  })

  it('should display all groceries when groceryList is called', () => {
    const wrapper = shallow(<App />)
    const mockGrocery = {name: 'apples', quantity: '10'}
    const mockGrocery2 = {name: 'bananas', quantity: '15'}


    wrapper.instance().addGrocery(mockGrocery)
    wrapper.instance().addGrocery(mockGrocery2)

    console.log(wrapper.instance().state.groceries);
    console.log(wrapper.instance().groceryList());
  })
})
