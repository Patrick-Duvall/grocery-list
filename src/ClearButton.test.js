import { mount } from "enzyme"
import ClearButton from './ClearButton'

describe('ClearButton', () => {
  it('should be disabled if no groceries on list', () => {
    const clearGroceriesMock= jest.fn()
    const wrapper = mount(<ClearButton  groceries ={[]} clearGroceries={clearGroceriesMock} />)
    expect(wrapper.find('.clear-button').hasClass('disabled')).toEqual(true)
  })

  it('should call clear grocery list when clicked', () => {
    const mockGrocery = {name: 'apples', quantity: '10'}
    const clearGroceriesMock= jest.fn()
    const wrapper = mount(<ClearButton  groceries={[mockGrocery]} clearGroceries={clearGroceriesMock}/> )

    expect(wrapper.find('.clear-button').hasClass('disabled')).toEqual(false)
    wrapper.find('.clear-button').simulate('click')
    expect(clearGroceriesMock).toHaveBeenCalled()
  })
})