import { Outlet } from 'react-router-dom';
import { CardProvider } from '../../context/CardContext';
import { Footer } from '../../components/Footer'
import { Header } from '../../components/Header';

import styles from './DefaultPage.module.css';

export const DefaultPage = () => {
    return(
        <main className={styles.container}>
            <CardProvider>
                <Header />
                <Outlet />
                <Footer />
            </CardProvider>
        </main>
    );
}
