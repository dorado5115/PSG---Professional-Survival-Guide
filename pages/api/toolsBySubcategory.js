import connectDB from '../../util/connection';
import Tool from '../../util/models/tool.model';

const handler = async (req, res) => {
    if (req.method === 'GET') {
        const tools = await Tool.find({ subcategory: req.query.subcategory }).select('_id subcategory title description');
        res.json(tools);
    }
};

export default connectDB(handler);