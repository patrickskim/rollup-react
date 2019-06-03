import React from 'react';
import PropTypes from 'react-proptypes';
import classNames from 'classnames/bind';
import styles from './Orderbook.module.scss'

const cx = classNames.bind(styles);

console.log('another', styles)

// TODO better name
const calc = ({ price, quantity }) => ({ });

const Row = (props)  => {
  const { price, quantity, total } = props;
  return (
    <tr key={price}>
      <td>{fmtUSD(price)}</td>
      <td>{fmtBTC(quantity)}</td>
      <td>{fmt$(total)}</td>
    </tr>
  );
};

// TODO generalize fmt
const fmt$ = (num) => new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(num);
const fmtBTC = (num) => new Intl.NumberFormat('en-US', { style: 'decimal', minimumFractionDigits: 6, minimumIntegerDigits: 1 }).format(num);
const fmtUSD = (num) => new Intl.NumberFormat('en-US', { style: 'decimal', minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(num);

const Orderbook = (props) => {
  const {
    orders,
    viewLimit,
  } = props;

  function renderRows(orders, viewLimit = 5) {
    let rows = [];
    let prev = {};

    orders.forEach((order, idx) => {
      const { price, quantity } = order;
      const total = price * quantity

      if (idx == 0) {
        prev = { price, quantity, total };

        return false;
      }

      if (prev.price != price) {
        rows.push(<Row {...prev} />);
        prev = { price, quantity, total };

        return false;
      }

      prev.quantity = prev.quantity + quantity;
      prev.total = prev.total + total;
    });

    return rows.slice(0, viewLimit);
  }

  function calcAvg(orders) {
    const { bids, asks } = orders;
    const lowest = asks[0];
    const highest = bids[0];

    return (lowest.price + highest.price) / 2;
  }

  const avg = calcAvg(orders);
  const bids = renderRows(orders.bids);
  const asks = renderRows(orders.asks);

  return (
    <div className={styles.Sample}>
      <thead>
        <th>Price (USDT)</th>
        <th>Amount (BTC)</th>
        <th>Total</th>
      </thead>
      <tbody className={styles.bids}>{bids}</tbody>
      <tr className={styles.avg}>
        <td colspan={3}>{fmtUSD(avg)}</td>
      </tr>
      <tbody className={styles.asks}>{asks}</tbody>
    </div>
  );
};

Orderbook.propTypes = {
  orders: PropTypes.shape({
    asks: PropTypes.arrayOf(
      PropTypes.shape({
        quantity: PropTypes.number.isRequired,
        price: PropTypes.number.isRequired
      })
    ).isRequired,
    bids: PropTypes.arrayOf(
      PropTypes.shape({
        quantity: PropTypes.number.isRequired,
        price: PropTypes.number.isRequired
      })
    ).isRequired,
  }),
  viewLimit: PropTypes.number
};

export default Orderbook;
