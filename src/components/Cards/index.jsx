import { CiEdit, CiTrash } from "react-icons/ci";
import styles from './Cards.module.css';

export const Cards = ({ card, onEdit, onView, onDelete, color }) => {
    return (
        <div className={styles.cards}>
            <div className={styles.image} onClick={() => onView(card)}>
                <img src={card.imageURL} alt={card.title} style={{ borderColor: color }} />
            </div>
            <div className={styles.footer} style={{ borderColor: color }}>
                <button onClick={() => onEdit(card)}><CiEdit size={23} />Editar</button>
                <button onClick={() => onDelete(card.id)}><CiTrash size={23} />Deletar</button>
            </div>
        </div>
    );
};
