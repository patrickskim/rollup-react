import React from 'react';
import ReactDOM from 'react-dom';

import Sample from './components/Sample';

const title = "test";

console.log("staart?")

const App = () => (
  <div id="hi">
    <div>{title} WTF</div>
    <Sample />
  </div>
);

ReactDOM.render(
  <App />,
  document.getElementById("main")
);
