import useSWR from 'swr'
import axios from 'axios'

import styles from "../styles/Home.module.css";
import { Sidebar, Content, NotificationsBar } from '../components'

export default function Home(props) {
  
  return (
    <>
        <div className={styles.page}>
          <Sidebar courses={props.courses} tools={props.tools}/>
          <Content />
          <NotificationsBar data={props.recentlyAdded}/>
        </div>
    </>
  )
}


export async function getServerSideProps(context) {
  const { data: courses, error: cousesError } = await axios.get('/api/courses');
  const { data: recentlyAdded, error: recentlyAddedError } = await axios.get('/api/coursesByDate');
  const { data: tools, error: toolsError } = await axios.get('/api/tools');

  return {
    props: {
      courses: JSON.stringify(courses),
      recentlyAdded: JSON.stringify(recentlyAdded),
      tools: JSON.stringify(tools)
    }
  }
}
