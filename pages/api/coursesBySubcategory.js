import connectDB from '../../util/connection';
import Course from '../../util/models/course.model';

const handler = async (req, res) => {
    // get the option from params (sidebar or all)
    
    if (req.method === 'GET') {
        const courses = await Course.find({ subcategory: req.query.subcategory }).select('_id subcategory title link');
        res.json(courses);
    }
};

export default connectDB(handler);