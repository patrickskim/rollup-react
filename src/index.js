import React from 'react';
import ReactDOM from 'react-dom';

import Orderbook from './components/Orderbook';
// import orders from '../data/sample.json';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { orders: null };
  }

  componentDidMount() {
    this.pollData(5000);
  }

  async pollData(interval = 1000) {
    const URL = 'https://exchange.itbit.com/api/feeds/orderbook/XBTUSD';

    let response = await fetch(URL);
    let json = await response.json();

    this.setState({ orders: json });
    setTimeout(() => { this.pollData(interval) }, interval);
  }

  render() {
    const { orders } = this.state;

    return (
      <div id="Application">
        { orders ? <Orderbook orders={orders} /> : 'Loading' }
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById("main")
);
