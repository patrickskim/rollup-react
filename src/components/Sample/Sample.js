import React from 'react';
import PropTypes from 'react-proptypes';
import classNames from 'classnames/bind';
import styles from './Sample.module.scss'

const cx = classNames.bind(styles);

console.log('another', styles)

const Sample = ({ message = 'this is an alert' }) => {
  console.log(styles.other)
  return (
    <div className={styles.Sample}>
      <span>{message}</span>
      <p>A child p</p>
      <div className={styles['sub-child']}>Mo</div>
    </div>
  );
};

Sample.propTypes = {
  message: PropTypes.string,
};

export default Sample;
