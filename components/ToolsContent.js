import styles from "./styles/CoursesContent.module.css";
import { TecmiTool } from "./components";

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

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
                        <Grid item xs={2} sm={4} md={4} key={tool._id}>
                            <TecmiTool 
                                key={tool._id} 
                                title={tool.title} 
                                image={images[Math.floor(Math.random() * images.length)]}
                                description={tool.description}
                            />
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </div>
    )
};


// TODO:
/* export async function getServerSideProps(context) {
    console.log("CONTEXT");
    console.log(context.query);
    const { subcategoryId } = context.query;
    try{
        const { data: coursesContent } = await axios.get('/api/coursesBySubcategory', {
            params: {
                subcategory: subcategoryId,
            }
        });

        return {
            props: {
                coursesContent,
            }
        }
    } catch(error) {
        console.log(error);
    }

    return {
        notFound: true,
    };
} */