import { Link } from 'react-router-dom';
import styles from './NotFound.module.css'

const NotFound = () => {
  return (
    <section className={styles.notFond}>
      <h2 className={styles.title}>404</h2>
      <p className={styles.subtitle}> Страница не найдена <br />
        <Link className={styles.link} to='/' >на главную</Link></p>
    </section>
  );
}

export default NotFound;