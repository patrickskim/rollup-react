import React from 'react';
import styles from './App.module.scss'

import Orderbook from '../components/Orderbook';

class App extends React.Component {
  constructor() {
    super();
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
      <div className={styles.App}>
        <div className={styles.chart}>
          <h3 className={styles['chart-title']}>Orderbook</h3>
          {orders ? <Orderbook orders={orders} /> : 'Loading'}
        </div>
      </div>
    );
  }
}

export default App;
