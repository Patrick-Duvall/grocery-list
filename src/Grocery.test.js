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
})