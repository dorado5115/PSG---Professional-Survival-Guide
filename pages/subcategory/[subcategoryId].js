import { useRouter } from 'next/router';
import { Sidebar, Content, NotificationsBar } from '../../components'
import styles from "../../styles/Home.module.css";

import useSWR from 'swr'
import axios from 'axios'

export default function SubcategoryCourses() {

    const router = useRouter();
    const { subcategoryId } = router.query;

    const { data: courses, error: cousesError } = useSWR('/api/courses', url => axios.get(url, {
        params: {
            option: "sidebar",
        }
    }));

    const { data: coursesContent, error: coursesContentError } = useSWR('/api/courses', url => axios.get(url, {
        params: {
            option: "all",
            subcategory: subcategoryId
        }
    }));

    const { data: icons, error: iconsError } = useSWR('/api/icons', url => axios.get(url));
    const { data: tools, error: toolsError } = useSWR('/api/tools', url => axios.get(url))


    if (cousesError || toolsError) return <div>failed to load</div>
    if (!courses) return <div><p>loading...</p></div>
    if (!coursesContent) return <div><p>loading...</p></div>
    if (!tools) return <div><p>loading tools...</p></div>
    if (!icons) return <div><p>loading icons...</p></div>

    return (
        <div className={styles.page}>
          <Sidebar courses={courses.data} tools={tools.data} icons={icons.data}/>
          <Content />
          <NotificationsBar />
        </div>
    )
}