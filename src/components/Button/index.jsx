/* import styles from './Button.module.css';
import clsx from 'clsx';

export const Button = ({ children, type = 'submit', onClick, icon = null, className }) => {
    return (
        <button className={clsx(styles.button, className)} type={type} onClick={onClick}>
            {icon && <span className={styles.icon}>{icon}</span>}
            {children && <span className={styles.text}>{children}</span>}
        </button>
    );
};
 */

import styles from './Button.module.css';

export const Button = ({ children, type = 'submit', onClick, icon }) => {
    return (
        <button className={styles.button} type={type} onClick={onClick}>
            {children}
        </button>
    );
};
