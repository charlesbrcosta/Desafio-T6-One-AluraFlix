import { Link, useLocation } from 'react-router-dom';
import { Logo } from '../Logo';
import { Button } from '../Button';
import styles from './Header.module.css';
import logo from '/logo.svg';

export const Header = () => {
    const location = useLocation();
    const isNewVideo = location.pathname === '/novoVideo'

    return (
        <header className={`
            ${styles.header}
            ${isNewVideo ? styles.newVideoHeader : styles.homeHeader}
            `}>
            
            <Link to='/' >
                <Logo src={logo} />
            </Link>
            <nav className={styles.menu}>
                <Link to='/'>
                    <Button>HOME</Button>
                </Link>
                <Link to='/novoVideo'>
                    <Button>NOVO VÍDEO</Button>
                </Link>
            </nav>
        </header>
    )
};
