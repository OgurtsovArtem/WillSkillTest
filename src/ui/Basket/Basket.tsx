

import { useState } from 'react';
import { BacketIcon } from 'ui/Icons/BasketIcon';
import styles from './Basket.module.css'

const Basket = () => {
  const [count, setCount] = useState(1);

  return (
  <div className={styles.basket}>
    <BacketIcon className={styles.basketIcon} />
    <span className={styles.count}>{count}</span>
  </div>
  )
}

export default Basket;
