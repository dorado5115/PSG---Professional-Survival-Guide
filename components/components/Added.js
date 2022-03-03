import Image from "next/image";
import styles from "./styles/Added.module.css"

export default function Added() {
    return (
        <div className={styles.content}>
            <Image 
                src="/blue.svg"
                alt="Added"
                className={styles.image}
                width={150}
                height={150}
            />
            <div className={styles.text}>
                <h4>JavaScript Execution Context - How JS Works Behind The Scenes</h4>
                <p>Diferentes Áreas</p>
            </div>
        </div>
    );
}