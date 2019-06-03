import React from 'react';
import ReactDOM from 'react-dom';

import Orderbook from './components/Orderbook';
import orders from '../data/sample.json';

const title = "test";

console.log("staart?", orders)

const App = () => (
  <div id="hi">
    <Orderbook orders={orders} />
  </div>
);

ReactDOM.render(
  <App />,
  document.getElementById("main")
);
