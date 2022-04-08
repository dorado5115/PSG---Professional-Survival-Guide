import { useEffect } from 'react'
import { useRouter } from 'next/router'
import Image from 'next/image';

import React from "react";
import styles from "./styles/Content.module.css";
import { ToolsContent, Contact} from "./"

import { Course } from "./components";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Fade from '@mui/material/Fade';

import useSWR from 'swr'
import axios from 'axios'

export default function Content() {
    const router = useRouter();
    var subcategoryId = router.query.subcategory;

    // Courses
    const { data: courses, error: coursesError } = useSWR('/api/courses', axios.get);

    useEffect(() => {
        subcategoryId = router.query;
    }, [router.query.subcategoryId]);
    
    if (coursesError) return <div>failed to load</div>
    if (!courses) return <div><p>loading...</p></div>
    
    var images = [
        "/blue.svg",
        "/green.svg",
        "/orange.svg",
        "/pink.svg",
        "/salmon.svg",
    ]
    
    if (subcategoryId == "Herramientas Tecmilenio") {
        return (
            <div className={styles.content}>
                <ToolsContent subcategoryId={subcategoryId}/>
            </div>
        )
    } else if (subcategoryId != "contacto" && subcategoryId != undefined) {
        return (
            <div className={styles.content}>
                <Box sx={{ with: '100%', height: '100%' }}>
                    <Grid container spacing={{ xs: 2, md: 5 }} rowSpacing={{xs: 4}} columns={{ xs: 1, sm: 4, md: 8, lg: 12 }}>
                        {courses.data.filter(course => course.subcategory == subcategoryId).map(course => (
                            <Fade in={true} key={course._id}>
                                <Grid item xs={2} sm={4} md={4} key={course._id}>
                                    <Course
                                        key={course._id}
                                        title={course.title}
                                        subcategory={course.subcategory}
                                        link={course.link}
                                        image={images[Math.floor(Math.random() * images.length)]}
                                    />
                                </Grid>
                            </Fade>
                        ))}
                    </Grid>
                </Box>
            </div>
        )
    } else if (subcategoryId == "contacto") {
        return (
            <div className={styles.content}>
                <Contact/>
            </div>
        )
    }

    return (
        <div className={styles.content}> 
            <div className={styles.bc}>
                <img src="/fondo_naranja.svg" alt="salmon" />
            </div>  
            <div className={styles.frontTitle}>
                <h1>Orgullo <strong>Latinoamericano</strong></h1>
                <p>
                    Somos estudiantes <b>como tu</b>, queremos que
                    salgas adelante y tengas la oportunidad
                    de poder <b>elegir lo que te apasiona</b>.
                </p>
            </div>
            <div className={styles.contentPhrases}>
                <div className={styles.phrases}>
                    <div>
                        <h2>“Aprende <strong>cada día</strong> y estarás bien”</h2>
                        <p>
                            -Freddy Vega (CEO de Platzi)
                        </p>
                    </div>
                    <div>
                        <h2>“Yo nunca me sentí mas acabado y viejo que a los 20s(...)<strong>Tienen un chingo de tiempo”</strong></h2>
                        <p>
                            -Guillermo del Toro (ha de oler a jokeis)
                        </p>
                    </div>
                </div>
                <div>
                    {/* <img src="https://drive.google.com/uc?export=view&id=1gUClTmhXWY56Ig9Bm6HHf3FFZ7uer28e" alt="mexican and lomito" /> */}
                    <img src="/lomito.svg" alt="mexican and lomito" />
                </div>
            </div>
        </div>
    )
}