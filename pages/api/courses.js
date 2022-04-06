import connectDB from '../../util/connection';
import Course from '../../util/models/course.model';

const handler = async (req, res) => {
    if (req.method === 'GET') {
        const courses = await Course.find().select();
        res.json(courses);
    } else if (req.method === 'POST') {
        // create a new course
        const newCourse = new Course(req.body);
        await newCourse.save();
        res.json(newCourse);
    }
};

export default connectDB(handler);