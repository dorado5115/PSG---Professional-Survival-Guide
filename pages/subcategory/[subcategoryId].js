import { useRouter } from 'next/router';
import { Sidebar, CoursesContent, NotificationsBar, ToolsContent } from '../../components'
import styles from "../../styles/Home.module.css";
import mongoose from 'mongoose';
import Course from '../../util/models/course.model';
import Tool from '../../util/models/tool.model';

import useSWR from 'swr'
import axios from 'axios'

export default function SubcategoryCourses(props) {
    const router = useRouter();
    
    return (
        <div className={styles.page}>
            <Sidebar courses={props.courses} tools={props.tools}/>
            {props.subcategoryId == "Herramientas Tecmilenio" ? (
                <ToolsContent subcategoryId={props.subcategoryId}/>
            ) : (
                <CoursesContent subcategoryId={props.subcategoryId}/>
            )}
            <NotificationsBar data={props.recentlyAdded}/>
        </div>
    )
}

export async function getServerSideProps(context) {
    const { subcategoryId } = context.query;

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
            tools: JSON.stringify(tools),
            subcategoryId: subcategoryId
        }
    }
}