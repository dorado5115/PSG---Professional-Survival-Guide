import connectDB from '../../util/connection';
import Tool from '../../util/models/tool.model';

const handler = async (req, res) => {
    const tools = await Tool.find();
    res.json(tools);
};

export default connectDB(handler);