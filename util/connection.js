const mongoose = require('mongoose');

const connectDB = handler => async (req, res) => {
    if (mongoose.connections[0].readyState) {
      // Use current db connection
      return handler(req, res);
    }
    // Use new db connection
    await mongoose.connect(process.env.MONGO_URL, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      ssl: true,
    }).then(() => {
      console.log('MongoDB Connected');
    }).catch(err => {
      console.log(err);
    });
    return handler(req, res);
};
  
export default connectDB;

