import styles from './Category.module.css';

export const Category = ({ name, color }) => {
    return (
        <div className={styles.category} style={{ backgroundColor: color }}>
            <h3>{name}</h3>
        </div>
    );
};
