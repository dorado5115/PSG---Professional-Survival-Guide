const { default: mongoose } = require('mongoose');
const { Schema, model } = require('mongoose');

const course = new Schema({
    categoria: {
        type: String,
        required: true
    },
    subcategoria: {
        type: String,
        required: true
    },
    titulo: {
        type: String,
        required: true
    },
    link: {
        type: String,
        required: true
    },
},
{
    timestamps: true,
    versionKey: false
});

mongoose.models = {};

var Course = model('Course', course);

export default Course;
