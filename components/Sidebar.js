import React from "react";
import styles from "../styles/Sidebar.module.css";
import Box from "./box";

export default function Sidebar({ courses, tools }) {

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
    
    return (
        <div className={styles.sidebar}>
            <div className={styles.logoContent}>
                <img className={styles.logo} src="/logo_psg.png" alt="logo" />
                <p>Professional Survival Guide</p>
            </div>
            <div>
                <h3>Cursos</h3>
                {Object.keys(categories).map(category => (
                    <Box title={category} children={Object.values(categories[category])} />
                ))}
            </div>
            <div>
                <h3>Herramientas Tecmilenio</h3>
            </div>
            <div>
                <h3>Contacto</h3>
            </div>
            <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank" rel="noopener noreferrer">
                Get Rick Rolled
            </a>
        </div>
    );
}