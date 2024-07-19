import styles from './Logo.module.css';

export const Logo = ({ src }) => {
    return(
        <div className={styles.logo}>
            <img src={src} />
        </div>
        
    );
}