import styles from './Intro.module.css';
import background from 'icons/intro-bg.svg';
import product from 'images/Intro/intro-products.png'
import clsx from 'clsx';

const Intro = () => {
  return (
    <section className={styles.intro}>
      <img className={styles.background} src={background} alt="background" />
      <div className={clsx(styles.container, '_container')}>
        <h1 className={styles.title}>АКТИВИРУЙ ИММУНИТЕТ!</h1>
        <p className={styles.text}>Всего пять секунд в день помогут укрепить иммунитет
          и повысить защитные силы организма</p>
        <h2 className={styles.subtitle}>NOOTRIS ПОМОГАЕТ</h2>
        <p className={styles.textSm}>Вашему организму во время пандемии
          и сезонных простуд</p>
        <img className={styles.product} src={product} alt="product" />
      </div>
    </section>
  );
}


export default Intro;