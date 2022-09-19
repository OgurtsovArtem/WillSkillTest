import styles from './Stock.module.css';
import ginger from 'images/stock/ginger.png';
import virus from 'images/stock/virus.png';
import nootris from 'images/stock/nootris.png';
import { clsx } from 'clsx';
import Button from 'ui/Button/Button';

const Stock = () => {
  return (
    <section className={styles.stock}>
      <div className={clsx(styles.container, '_container-secondary')}>
        <h2 className={styles.title}>ПОЛУЧИ ЗАЩИТУ ИММУНИТЕТА<br/>
          <span className={styles.accent}> СО СКИДКОЙ -15% ПЕРВЫМ!</span>
        </h2>
        <div className={styles.price}>
          <p className={styles.oldPrice}>750₽</p>
          <p className={styles.actualPrice}>690₽</p>
        </div>
        <div className={styles.advantages}>
          <div className={styles.card}>
            <img src={ginger} alt="ginger" />
            <p className={styles.text}>
              Содержит <br/>
              <span className={styles.accent}>имбирь</span>
            </p>
          </div>
          <div className={styles.cardLg}>
            <img src={nootris} alt="nootris" />
            <p className={styles.textLg}>
              + Бесплатная доставка <br/>
              <span className={styles.accent}>Специальная цена</span>
            </p>
          </div>
          <div className={styles.card}>
            <img src={virus} alt="virus" />
            <p className={styles.text}>
              Нейтрализует <br/>
              <span className={styles.accent}>вирусы</span>
            </p>
          </div>
        </div>
        <Button className={styles.button}>Оформить заказ!</Button>
      </div>
    </section>
  );
}

export default Stock;