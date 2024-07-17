import styles from './FieldText.module.css';

export const FieldText = ({ label, required, placeholder, value, toChange, type = 'text' }) => {
    return (
        <div className={styles.fieldText}>
            <label>{label}</label>
            <input
                type={type}
                required={required}
                placeholder={placeholder}
                value={value}
                onChange={(e) => toChange(e.target.value)}
            />
        </div>
    );
};
