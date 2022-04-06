import styles from "./styles/CoursesContent.module.css";
import { TecmiTool } from "./components";

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Fade from '@mui/material/Fade';

import useSWR from 'swr'
import axios from 'axios'

export default function ToolsContent({ subcategoryId }) {
    // Courses
    const { data: toolsContent, error: toolsContentError } = useSWR('/api/toolsBySubcategory', url => axios.get(url, {
        params: {
            subcategory: subcategoryId,
        }
    }));

    if (toolsContentError) return <div>failed to load</div>
    if (!toolsContent) return <div><p>loading...</p></div>
    
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
                <Grid container spacing={{ xs: 2, md: 5 }} rowSpacing={{xs: 0}} columns={{ xs: 1, sm: 4, md: 8, lg: 12 }}>
                    {toolsContent.data.map(tool => (
                        <Fade in={true}>
                            <Grid item xs={2} sm={4} md={4} key={tool._id}>
                                <TecmiTool 
                                    key={tool._id} 
                                    title={tool.title} 
                                    image={images[Math.floor(Math.random() * images.length)]}
                                    description={tool.description}
                                />
                            </Grid>
                        </Fade>
                    ))}
                </Grid>
            </Box>
        </div>
    )
};