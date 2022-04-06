import { useEffect } from "react";
import Link from "next/link";
import React from "react";
import { useRouter } from "next/router";

import * as MaterialDesign from "react-icons/md";
import styles from "./styles/Box.module.css";

export default function Box({ title, children, icon }) {
    const router = useRouter();
    var subcategoryId = router.query.subcategory;

    useEffect(() => {
        subcategoryId = router.query;
    }, [router.query.subcategoryId]);
        
    const Icon = props => {
        const { iconName, size, color } = props;
        const icon = React.createElement(MaterialDesign[iconName]);
        return <div style={{ fontSize: size, color: color }}>{icon}</div>;
    };

    // make an array of arrays where each subcategory has its icon
    let list = [];
    
    for (let i = 0; i < children.length; i++) {
        list.push([children[i], icon[i]]);
    }
    
    return(
        <div className={styles.box}>
            <h3><strong>{title}</strong></h3>
            <ul>
                {children.map(child => (
                   <Link href={`/?subcategory=${child}`}>
                        <li className={child == subcategoryId ? styles.active : ""}>
                            <Icon iconName={icon[children.indexOf(child)]} />
                            <a>{child}</a>
                        </li>
                    </Link>
                ))}
            </ul>
        </div>
    )
}