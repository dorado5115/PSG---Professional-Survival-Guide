import styles from "./styles/Course.module.css";
import { useUser } from "@auth0/nextjs-auth0";
import axios from "axios";

// function when it is clicked a course is added to the user's events array
const addEvent = async (user, title, subcategory, category) => {
   
    if (user) {
        axios.put(`/api/users`, {
            email: user.email,
            title,
            subcategory,
            category,
        })
        .then(res => {
            /* console.log(res); */
        })
        .catch(err => {
            console.log(err);
        })
    }
};

export default function Course({ image, title, link, subcategory, category }) {
    const { user } = useUser();

    return (
        <div className={styles.course} onClick={() => addEvent(user, title, subcategory, category)}>
            <a href={link} target="_blank" rel="noreferrer">
                <div className={styles.container}>
                    <img src={image} alt={title} />
                    <p>{title}</p>
                </div>
            </a>
        </div>
    )
}