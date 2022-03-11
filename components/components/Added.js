import Image from "next/image";
import styles from "./styles/Added.module.css"

export default function Added({ title, subcategory, link, image }) {
    return (
        <a className={styles.content} href={link} target="_blank">
            {/* <Image 
                src={image}
                alt="Added"
                className={styles.image}
                width={180}
                height={180}
            /> */}
            <img src={image} alt={title} className={styles.image} />
            <div className={styles.text}>
                <h4>{title}</h4>
                <p>{subcategory}</p>
            </div>
        </a>
    );
}