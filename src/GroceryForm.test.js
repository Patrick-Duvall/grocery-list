import { shallow,  mount } from "enzyme"
import Grocery from './Grocery'
import GroceryForm from './GroceryForm'

describe('GroceryForm', () => {

  it('should call the addGrocery prop on submit', () => {
    Date.now = jest.fn(() => '1487076708000')
    const addGroceryMock= jest.fn()
    let grocery = {name: 'apple', quantity: '1', starred: false}
    const wrapper  = mount(
      <GroceryForm
        addGrocery={addGroceryMock}
      />
    )
    wrapper.setState({ name: 'apple', quantity: '1', notes: 'applezz'})
    wrapper.find('.Grocery-submit').simulate('click')
    expect(addGroceryMock).toHaveBeenCalledWith({name: 'apple',
      quantity: '1',
      notes: 'applezz',
      id: '1487076708000'
    })
    Date.now = global.Date.now
  })
})

