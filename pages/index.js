import useSWR from 'swr'
import axios from 'axios'

import styles from "../styles/Home.module.css";
import { Sidebar, Content, NotificationsBar } from '../components'

import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';

import { useUser } from "@auth0/nextjs-auth0";
import { useRouter } from "next/router";

export default function Home() { 
  const { user, error, isLoading } = useUser();
  const router = useRouter();
  
  const { data: courses, error: coursesError } = useSWR('/api/courses', axios.get);
  const { data: tools, error: toolsError } = useSWR('/api/tools', axios.get);
  const { data: recentlyAdded, error: recentlyAddedError } = useSWR('/api/coursesByDate', axios.get);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;
  
  
  if (!user) {
    router.push('/api/auth/login');
    
  } else if (user) {
  
    if (coursesError || toolsError || recentlyAddedError) {
      return <div>failed to load courses</div>
    }
    
    if (!courses || !tools || !recentlyAdded) {
      return (
        <>
            <Backdrop
                sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                open={true}
            >
                <CircularProgress color="inherit" />
            </Backdrop>
        </>
      )
    }
    
    return (
      <>
          <div className={styles.page}>
            <Sidebar courses={courses.data} tools={tools.data}/>
            <Content />
            <NotificationsBar data={recentlyAdded.data}/>
          </div>
      </>
    )
  }

  return (
    <>
        <Backdrop
            sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
            open={true}
        >
            <CircularProgress color="inherit" />
        </Backdrop>
    </>
  )
}