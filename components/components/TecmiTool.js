import styles from "./styles/TecmiTools.module.css";

export default function TecmiTool({ image, title, description }) {
    return (
        <div className={styles.tool}>
            <div className={styles.container}>
                <img src={image} alt={title} />
                <p><strong>{title}</strong></p>
                <p>{description}</p>
            </div>
        </div>
    )
}