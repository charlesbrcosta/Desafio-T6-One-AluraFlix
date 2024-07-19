import { Logo } from "../Logo";
import { Button } from '../Button';
import { FiHome, FiPlusCircle } from "react-icons/fi";
import logo from '/logo.svg';
import clsx from 'clsx';

import styles from './Footer.module.css';
import { Link } from "react-router-dom";

export const Footer = ({ isNewVideo }) => {
    return(
      <footer className={styles.footer}>
        <div className={styles.logo}>
          <Logo src={logo} />
        </div>
        <nav className={styles.menu}>
                <Link to="/">
                    <Button className={styles.button} ><FiHome />HOME</Button>
                </Link>
                <Link to="/novoVideo">
                    <Button className={styles.button} ><FiPlusCircle />NOVO VIDEO</Button>
                </Link>
            </nav>
      </footer>      
    );
}


