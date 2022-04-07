import styles from "./styles/Course.module.css";

export default function Course({ image, title, link }) {
    return (
        <div className={styles.course}>
            <a href={link} target="_blank" rel="noreferrer">
                <div className={styles.container}>
                    <img src={image} alt={title} />
                    <p>{title}</p>
                </div>
            </a>
        </div>
    )
}