import React from "react";
import styles from "./styles/NotificationsBar.module.css";
import { Added } from "./components";

export default function NotificationsBar({ data }) {

    var images = [
        "/blue.svg",
        "/green.svg",
        "/orange.svg",
        "/pink.svg",
        "/salmon.svg",
    ]

    console.log(data);
    
    //filter out the courses by the last month
    var filteredData = data.filter(course => {
        var date = new Date(course.createdAt);
        var today = new Date();
        var lastMonth = new Date(today.getFullYear(), today.getMonth() - 1, today.getDate());
        return date > lastMonth;
    });

    // change filtered data when page is ready
    // TODO

    return (
        <div className={styles.notificationsBar}>
            <h3>Recientemente agregados</h3>
            {data.map(course => (
                <Added 
                    key={course._id} 
                    title={course.title} 
                    subcategory={course.subcategory} 
                    link={course.link} 
                    image={images[Math.floor(Math.random() * images.length)]}
                />
            ))}
        </div>
    );
}