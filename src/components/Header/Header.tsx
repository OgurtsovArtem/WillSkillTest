import styles from './Header.module.css'
import { Link } from 'react-router-dom';
import Burger from 'ui/Burger/Burger';
import clsx from 'clsx';
import { PhoneIcon } from 'ui/Icons/PhoneIcon';
import { LogoIcon } from 'ui/Icons/LogoIcon';
import { useState } from 'react';
import Basket from 'ui/Basket/Basket';
const Header = () => {
  const [activeNav, setActiveNav] = useState(false);

  const openNav = () => setActiveNav(!activeNav);

  return (
    <header className={styles.header}>
      <div className={clsx(styles.container, '_container')}>
        <LogoIcon className={styles.logo} />
        <nav className={clsx(styles.nav, { [styles.navOpen]: activeNav })}>
          <ul className={styles.list}>
            <li className={styles.item}>
              <Link className={styles.link} to='/'>FAQ</Link>
            </li>
            <li className={styles.item}>
              <Link className={styles.link} to='/'>Оплата и доставка</Link>
            </li>
            <li className={styles.item}>
              <Link className={styles.link} to='/'>Возврат</Link>
            </li>
            <li className={styles.item}>
              <Link className={styles.link} to='/'>Исследования</Link>
            </li>
            <li className={styles.item}>
              <Link className={styles.link} to='/'>Личный кабинет</Link>
            </li>
          </ul>
          <a className={styles.phone} href="tel:+88006000990">
            <p className={styles.fullPhone} >8 8 (800) 600-09-90</p>
            <PhoneIcon className={styles.shortPhone} />
          </a>
        </nav>
        <Basket />
        <Burger onClick={openNav} active={activeNav} />
      </div>
    </header>
  );
}

export default Header;