const mongoose = require('mongoose')
const Schema = mongoose.Schema

let Veterinaria = new Schema ({
    tipo: {
        type: String,
        enum: ['Perro', 'Gato', 'Ave', 'Reptil', 'Conejos', 'Pez', 'Roedores','Otro'],
    },
    raza: {
        type: String
    },
    nombre: {
        type: String
    },
    edad: {
        type: Number,
        min: 0
    },
    sexo: {
        type: String

    },
    peso: {
        type: Number,
        min: 0
    },
    duenio: {
        type: String
    },
    telefono: {
        type: Number
    },
    vacunas: {
        type: [String],
        default: []
    }
    
},{
    collection: 'veterinaria'
})  

module.exports = mongoose.model('Veterinaria', Veterinaria)