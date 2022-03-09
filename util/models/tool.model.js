const { default: mongoose } = require('mongoose');
const { Schema, model } = require('mongoose');

const tool = new Schema({
    category: {
        type: String,
        required: true
    },
    subcategory: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    description: {
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

var Tool = model('Tool', tool);
export default Tool;