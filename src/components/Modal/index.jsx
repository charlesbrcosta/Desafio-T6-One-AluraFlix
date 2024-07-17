import { IoMdCloseCircleOutline } from "react-icons/io";
import styles from './Modal.module.css';

export const Modal = ({ children, onClose }) => {
    return (
        <div className={styles.modalContainer}>
            <div className={styles.modalOverlay} onClick={onClose}>
                <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
                    <button className={styles.closeButton} onClick={onClose}><IoMdCloseCircleOutline /></button>
                    <h2>EDITAR VÍDEO:</h2>
                    {children}
                </div>
            </div>
        </div>
    );
};

