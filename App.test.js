import { shallow } from "enzyme"

describe('App', () => {
  it('should update the state with a grocery when addGrocery is called', () => {
    const wrapper = shallow(<App />)
    const mockGrocery = {name: 'apples', quantity: '10'}
    const expected = [{name: 'apples', quantity: '10', starred: 'false'}]

    wrapper.instance().addGrocery(mockGrocery)

    expect(wrapper.state.groceries).toEqual(expected)
  })
})