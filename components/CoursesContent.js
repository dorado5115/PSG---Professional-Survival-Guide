import styles from "./styles/CoursesContent.module.css";
import { Course } from "./components";

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

import useSWR from 'swr'
import axios from 'axios'

export default function CoursesContent({ subcategoryId }) {

    // Courses
    const { data: coursesContent, error: cousesError } = useSWR('/api/coursesBySubcategory', url => axios.get(url, {
        params: {
            subcategory: subcategoryId,
        }
    }));

    if (cousesError) return <div>failed to load</div>
    if (!coursesContent) return <div><p>loading...</p></div>
    
    var images = [
        "/blue.svg",
        "/green.svg",
        "/orange.svg",
        "/pink.svg",
        "/salmon.svg",
    ]
    
    return (
        <div className={styles.content}>
            <Box sx={{ with: '100%' }}>
                <Grid container spacing={{ xs: 2, md: 5 }} columns={{ xs: 1, sm: 4, md: 8, lg: 12 }}>
                    {coursesContent.data.map(course => (
                        <Grid item xs={2} sm={4} md={4} key={course._id}>
                            <Course key={course._id} title={course.title} link={course.link} image={images[Math.floor(Math.random() * images.length)]}/>
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </div>
    )
};