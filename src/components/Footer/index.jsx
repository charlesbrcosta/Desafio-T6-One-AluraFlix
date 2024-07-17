import { Logo } from "../Logo";
import logo from '/logo.svg';

import styles from './Footer.module.css';

export const Footer = () => {
    return(
      <footer className={styles.footer}>
        <Logo src={logo}/>
      </footer>
      
    );
}
