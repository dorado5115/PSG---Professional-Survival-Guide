import Link from "next/link";
import React from "react";
import * as md from "react-icons/md";
import styles from "./styles/Box.module.css";

export default function Box({ title, children }) {

    return(
        <div className={styles.box}>
            <h3><strong>{title}</strong></h3>
            <ul>
                {children.map(child => (
                    <li>
                        <md.MdInsertDriveFile />
                        <Link href={`/courses?categoria=${title}&subcategoria=${child}`}>
                            <a>{child}</a>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}