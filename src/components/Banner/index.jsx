import styles from './Banner.module.css';

export const Banner = ({ src, category, title, description, thumbnail, color }) => {
    return (
        <div className={styles.banner}>
            <div className={styles.overlay}></div>
            <div className={styles.info}>
                <div className={styles.category} style={{ backgroundColor: color }}>
                    {category}
                </div>
                <h2 className={styles.title}>{title}</h2>
                <p className={styles.description}>{description}</p>
            </div>
            {thumbnail && (
                <div className={styles.thumbnail}>
                    <img src={thumbnail} alt="Thumbnail" />
                </div>
            )}
            <img src={src} alt="Banner" className={styles.img} />
        </div>
    );
};










