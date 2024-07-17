import { IoMdCloseCircleOutline } from "react-icons/io";
import YouTube from 'react-youtube';
import styles from './VideoModal.module.css';

export const VideoModal = ({ videoId, onClose, color }) => {
    const opts = {
        height: '360',
        width: '640',
        playerVars: {
            autoplay: 1,
        },
    };

    return (
        <div className={styles.videoModalOverlay} onClick={onClose}>
            <div className={styles.videoModalContent} style={{ backgroundColor: color }} onClick={(e) => e.stopPropagation()}>
                <button className={styles.closeButton} onClick={onClose}><IoMdCloseCircleOutline /></button>
                <div className={styles.videoContainer}>
                    <YouTube videoId={videoId} opts={opts} />
                </div>
            </div>
        </div>
    );
};

