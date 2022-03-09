import React from "react";
import styles from "./styles/Sidebar.module.css";
import stylesBox from "./components/styles/Box.module.css";

import { Box } from "./components";
import Link from "next/link";
import { useRouter } from "next/router";
import * as md from "react-icons/md";

export default function Sidebar({ courses, tools }) {
    const router = useRouter();
    
    // make dictionary of categories and unique subcategories with their icons
    const categories = {};
    courses.forEach(course => {
        if (!categories[course.category]) {
            categories[course.category] = {
                icon: [course.icon],
                subcategories: [course.subcategory]
            };
        } else {
            if (!categories[course.category].subcategories.includes(course.subcategory)) {
                categories[course.category].subcategories.push(course.subcategory);
                categories[course.category].icon.push(course.icon);
            }
        }
    });
    
    console.log("CATEGORIES");
    console.log(categories);
    // make dictionary of categories and unique subcategories of tools
    const categoriesTools = {};
    tools.forEach(tool => {
        if (!categoriesTools[tool.category]) {
            categoriesTools[tool.category] = {
                subcategories: [tool.subcategory],
                icon: [tool.icon]
            };
        } else {
            if (!categoriesTools[tool.category].subcategories.includes(tool.subcategory)) {
                categoriesTools[tool.category].subcategories.push(tool.subcategory);
                categoriesTools[tool.category].icon.push(tool.icon);
            }
        }
    });

    const returnHome = () => {
        router.push("/");
    };
    
    return (
        <div className={styles.sidebar}>
            <div className={styles.logoContent} onClick={returnHome}>
                <img className={styles.logo} src="/logo_psg.png" alt="logo" />
                <p>Professional Survival Guide</p>
            </div>
            <div className={styles.content}>
                <div className={styles.section}>
                    <h2>Cursos</h2>
                    {Object.keys(categories).map(category => (
                        <Box title={category} children={Object.values(categories[category].subcategories)} icon={Object.values(categories[category].icon)} />
                    ))}
                </div>
                {/* <div className={styles.section}>
                    <h2>Herramientas</h2>
                    {Object.keys(categoriesTools).map(category => (
                        <Box title={category} children={Object.values(categoriesTools[category])} icon={Object.values(categoriesTools[category].icon)} />
                    ))}
                </div> */}
                <div className={styles.section}>
                    <h2>Contacto</h2>
                    <div className={stylesBox.box}>
                        <ul>
                            <li>
                                <md.MdPhone />
                                <Link href={`/contacto`}>
                                    <a>Contáctanos</a>
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