const {Schema, model} =require('mongoose');
const dbConection = require('../db/db.config');

const TareaSchemal=Schema(
    {
        titulo:{
            type: String,
            require: true,
        },
        descripcion:{
            type: String,
            require: true,
        }

    },
    { timestamps: true }
);

module.exports = model('Tarea',TareaSchemal);