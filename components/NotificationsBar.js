import React from "react";
import styles from "./styles/NotificationsBar.module.css";
import { Added } from "./components";

export default function NotificationsBar() {
    return (
        <div className={styles.notificationsBar}>
            <h3>Recientemente agregados</h3>
            <Added />
            <Added />
            <Added />
            <Added />
            <Added />
            <Added />
            <Added />
            <Added />
            <Added />
            <Added />
            <Added />
            <Added />
            <Added />
            <Added />
        </div>
    );
}