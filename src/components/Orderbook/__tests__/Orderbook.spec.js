import React from 'react';
import Orderbook from '../.';
import TestRenderer from 'react-test-renderer';

describe('<Orderbook />', () => {
  const props = {
    orders: {
      bids: [{
        price: 0,
        quantity: 1,
      }],
      asks: [{
        price: 0,
        quantity: 1,
      }]
    }
  };

  it('renders correctly', () => {
    const actual = TestRenderer.create(<Orderbook {...props} />).toJSON();

    expect(actual).toMatchSnapshot();
  });

});
