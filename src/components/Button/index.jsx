import styles from './Button.module.css';

export const Button = ({ children, type = 'submit', onClick }) => {
    return (
        <button className={styles.button} type={type} onClick={onClick}>
            {children}
        </button>
    );
};
