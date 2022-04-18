import connectDB from '../../util/connection';
import User from '../../util/models/user.model';

const handler = async (req, res) => {
    if (req.method === 'GET') {
        // get the email from the request query
        const email = req.query.email;
        // get the user from the database
        const user = await User.findOne({ email });
        // send the user back to the client
        res.json(user);

    } else if (req.method === 'POST') {
        const { email, name } = req.body;

        const newUser = new User({
            email,
            name
        });

        await newUser.save();
        res.json(newUser);
    } else if (req.method == "PUT"){
        const { email, title, subcategory, category } = req.body;

        // if the user already has the course in their events array, increment the clicks
        // if not, add the course to the events array
        const user = await User.findOne({ email });
        const events = user.events;
        let event;

        try{
            event = events.find(event => event.title === title && event.subcategory === subcategory && event.category === category);

            if (event) {
                event.clicks++;
            }
            else {
                events.push({
                    title,
                    subcategory,
                    category,
                    clicks: 1
                });
            }

            await user.save();
            res.json(user);

        } catch(err){
            console.log(err);
        }
    }
}

export default connectDB(handler);