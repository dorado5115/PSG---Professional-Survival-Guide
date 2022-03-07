import { useRouter } from 'next/router';
import { Sidebar, Content, NotificationsBar } from '../../components'

export default function SubcategoryCourses() {

    const { data: courses, error: cousesError } = useSWR('/api/courses', url => axios.get(url, {
        params: {
          option: "sidebar"
        }
    }))
    
    const { data: tools, error: toolsError } = useSWR('/api/tools', url => axios.get(url))

    const router = useRouter();
    console.log("IT WORKS!!");
    console.log(router.query.subcategoryId);

    return (
        <h2>Entraste</h2>
    )
}