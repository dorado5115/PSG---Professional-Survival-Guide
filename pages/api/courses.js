import connectDB from '../../util/connection';
import Course from '../../util/models/course.model';

const handler = async (req, res) => {
    // get the option from params (sidebar or all)
    const { option } = req.query;

    if (req.method === 'GET') {
        const courses = await Course.find().select('category subcategory icon');
        res.json(courses);
    } else if (req.method === 'POST') {
        // create a new course
        const newCourse = new Course(req.body);
        await newCourse.save();
        res.json(newCourse);
    }
};

export default connectDB(handler);