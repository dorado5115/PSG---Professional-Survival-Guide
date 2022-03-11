import { useRouter } from 'next/router';
import { Sidebar, CoursesContent, NotificationsBar } from '../../components'
import styles from "../../styles/Home.module.css";

import useSWR from 'swr'
import axios from 'axios'

export default function SubcategoryCourses() {
    const router = useRouter();
    const { subcategoryId } = router.query;

    // Sidebar Courses
    const { data: courses, error: cousesError } = useSWR('/api/courses', url => axios.get(url, {
        params: {
            option: "sidebar",
        }
    }));

    const { data: recentlyAdded, error: recentlyAddedError } = useSWR('/api/coursesByDate', url => axios.get(url));

    // Sidebar tools
    const { data: tools, error: toolsError } = useSWR('/api/tools', url => axios.get(url))

    if (cousesError || toolsError || recentlyAddedError) return <div>failed to load</div>
    if (!courses) return <div><p>loading...</p></div>
    if (!recentlyAdded) return <div><p>loading secrets...</p></div>
    if (!tools) return <div><p>loading tools...</p></div>

    return (
        <div className={styles.page}>
          <Sidebar courses={courses.data} tools={tools.data}/>
          <CoursesContent subcategoryId={subcategoryId} />
          <NotificationsBar data={recentlyAdded.data}/>
        </div>
    )
}