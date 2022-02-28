import React from "react";
import styles from "./styles/Sidebar.module.css";
import stylesBox from "./styles/Box.module.css";

import Box from "./box";
import Link from "next/link";
import * as md from "react-icons/md";

export default function Sidebar({ courses, tools }) {

    console.log(tools);

    // make dictionary of categories and unique subcategories
    const categories = {};
    courses.forEach(course => {
        if (!categories[course.categoria]) {
            categories[course.categoria] = [course.subcategoria];
        } else {
            if (!categories[course.categoria].includes(course.subcategoria)) {
                categories[course.categoria].push(course.subcategoria);
            }
        }
    });

    // make dictionary of categories and unique subcategories of tools
    const categoriesTools = {};
    tools.forEach(tool => {
        if (!categoriesTools[tool.categoria]) {
            categoriesTools[tool.categoria] = [tool.subcategoria];
        } else {
            if (!categoriesTools[tool.categoria].includes(tool.subcategoria)) {
                categoriesTools[tool.categoria].push(tool.subcategoria);
            }
        }
    });
    
    return (
        <div className={styles.sidebar}>
            <div className={styles.logoContent}>
                <img className={styles.logo} src="/logo_psg.png" alt="logo" />
                <p>Professional Survival Guide</p>
            </div>
            <div className={styles.content}>
                <div className={styles.section}>
                    <h2>Cursos</h2>
                    {Object.keys(categories).map(category => (
                        <Box title={category} children={Object.values(categories[category])} />
                    ))}
                </div>
                <div className={styles.section}>
                    <h2>Herramientas</h2>
                    {Object.keys(categoriesTools).map(category => (
                        <Box title={category} children={Object.values(categoriesTools[category])} />
                    ))}
                </div>
                <div className={styles.section}>
                    <h2>Contacto</h2>
                    <div className={stylesBox.box}>
                        <ul>
                            <li>
                                <md.MdInsertDriveFile />
                                <Link href={`/contacto`}>
                                    <a>Contactanos</a>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <a 
                style={{ fontSize: "10px", alignSelf: "center", color: "#9C9FA7" }}
                href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank" rel="noopener noreferrer">
                    Secretos del universo
                </a>
            </div>            
        </div>
    );
}