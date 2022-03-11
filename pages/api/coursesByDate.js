import connectDB from '../../util/connection';
import Course from '../../util/models/course.model';

const handler = async (req, res) => {
    // get the option from params (sidebar or all)
    
    if (req.method === 'GET') {
        const courses = await Course.find().select('_id subcategory title link createdAt');
        res.json(courses);
    }
};

export default connectDB(handler);