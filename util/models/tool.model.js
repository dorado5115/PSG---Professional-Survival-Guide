const { default: mongoose } = require('mongoose');
const { Schema, model } = require('mongoose');

const tool = new Schema({
    categoria: {
        type: String,
        required: true
    },
    titulo: {
        type: String,
        required: true
    },
    descripcion: {
        type: String,
        required: true
    },
},
{
    timestamps: true,
    versionKey: false
});

mongoose.models = {};

var Tool = model('Tool', tool);

export default Tool;