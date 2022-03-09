const { default: mongoose } = require('mongoose');
const { Schema, model } = require('mongoose');

const course = new Schema({
    category: {
        type: String,
        required: true
    },
    subcategory: {
        type: String,
        required: true
    },
    link: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    icon: {
        type: String,
        required: true
    }
},
{
    timestamps: true,
    versionKey: false
});

mongoose.models = {};

var Course = model('Course', course);

export default Course;
