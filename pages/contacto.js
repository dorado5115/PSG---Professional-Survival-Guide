import mongoose from 'mongoose';
import Course from '../util/models/course.model';
import Tool from '../util/models/tool.model';

import styles from "../styles/Home.module.css";
import { Sidebar, Contact, NotificationsBar } from '../components'

export default function Contacto(props) {
    return (
        <>
            <div className={styles.page}>
                <Sidebar courses={props.courses} tools={props.tools}/>
                <Contact />
                <NotificationsBar data={props.recentlyAdded}/>
            </div>
        </>          
    )
};

export async function getServerSideProps() {
    if (mongoose.connection.readyState === 0) {
        await mongoose.connect(process.env.MONGO_URL, {
            useUnifiedTopology: true,
            useNewUrlParser: true
        })
    }
    const courses = await Course.find().select('category subcategory icon');
    const recentlyAdded = await Course.find().select('_id subcategory title link createdAt');
    const tools = await Tool.find();
    
    return {
        props: {
          courses: JSON.stringify(courses),
          recentlyAdded: JSON.stringify(recentlyAdded),
          tools: JSON.stringify(tools)
        }
    }
  }
  