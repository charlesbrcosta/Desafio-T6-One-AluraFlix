import styles from './DropdownList.module.css';

export const DropdownList = ({ label, required, items, value, toChange }) => {
    return (
        <div className={styles.dropdownList}>
            <label>{label}</label>
            <select
                required={required}
                value={value}
                onChange={(e) => toChange(e.target.value)}
            >
                <option value="" disabled>Selecione uma categoria</option>
                {items.map((item) => (
                    <option key={item.id} value={item.name}>{item.name}</option>
                ))}
            </select>
        </div>
    );
};
