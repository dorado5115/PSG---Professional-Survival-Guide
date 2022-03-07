import connectDB from '../../util/connection';
import Icon from "../../util/models/icon.model";

const handler = async (req, res) => {   
    const icons = await Icon.find();
    res.json(icons);
};

export default connectDB(handler);