import React from 'react'
import {shallow, mount } from 'enzyme';
import Grocery from './Grocery';

describe('Grocery', () => {

  it('should match the snapshot with provided data', () => {
    const wrapper = shallow(
      <Grocery 
        name="Bananas" 
        quantity="7"
        purchased="false"
        starred="false"
        onStar={jest.fn()}
        onPurchase={jest.fn()}
        onDelete={jest.fn()}
      />
    );

    expect(wrapper).toMatchSnapshot();
  })

  it('should nave a classname of tarred if starred', () => {
    const wrapper = shallow(
      <Grocery name='Bananas' starred={true} />
    )

    expect(wrapper.is('.starred')).toEqual(true)
  })

  it('should call the onPurchase prop when clicked', () => {
    const onPurchaseMock= jest.fn()

    const wrapper  = mount(
      <Grocery
        id={1}
        name='Bananas'
        purchased={true}
        onPurchase={onPurchaseMock}
      />
    )
    wrapper.find('.Grocery-purchase').simulate('click')

    expect(onPurchaseMock).toHaveBeenCalledWith(1)
  })

  it('should call the onStar prop when clicked', () => {
    const onStarMock = jest.fn()

    const wrapper = mount( 
      <Grocery
        id={1}
        name='Bananas'
        starred={true}
        onStar={onStarMock}
      />
    )

    wrapper.find('.Grocery-star').simulate('click')

    expect(onStarMock).toHaveBeenCalledWith(1)
  })

  it('should call the onDelete prop when clicked', () => {
    const onDeleteMock = jest.fn()

    const wrapper = mount(
      <Grocery
        id={1}
        name='Bananas'
        onDelete={onDeleteMock}
      />
    );

    wrapper.find('.Grocery-delete').simulate('click')

    expect(onDeleteMock).toHaveBeenCalledWith(1)
  })
})