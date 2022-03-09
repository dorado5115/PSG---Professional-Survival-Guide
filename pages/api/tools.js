import connectDB from '../../util/connection';
import Tool from '../../util/models/tool.model';

const handler = async (req, res) => {
    if (req.method === 'GET') {
        const tools = await Tool.find();
        res.json(tools);
    } else if (req.method === 'POST') {
        const newTool = new Tool(req.body);
        await newTool.save();
        res.json(newTool);
    }
};

export default connectDB(handler);