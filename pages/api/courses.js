import connectDB from '../../util/connection';
import Course from '../../util/models/course.model';

const handler = async (req, res) => {
    // get the option from params (sidebar or all)
    const { option } = req.query;

    if (option == "sidebar") {
        const courses = await Course.find().select('categoria subcategoria');
        res.json(courses);
    } else if (option == "all") {
        if (req.query.subcategory) {
            const courses = await Course.find({ subcategoria: req.query.subcategory });
            res.json(courses);
        } else {
            const courses = await Course.find();
            res.json(courses);
        }
    }
};

export default connectDB(handler);