const { default: mongoose } = require('mongoose');
const { Schema, model } = require('mongoose');

const user = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    events: [
        {
            title: {
                type: String,
                required: true
            },
            subcategory: {
                type: String,
                required: true
            },
            category: {
                type: String,
                required: true
            },
            clicks: {
                type: Number,
                required: true
            },
        }
    ]
},
{
    timestamps: true,
    versionKey: false
});

mongoose.models = {};

var User = model('User', user);
export default User;