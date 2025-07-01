const mongoose = require('mongoose')
const Schema = mongoose.Schema

let Mascota = new Schema ({
    nombre: {
        type: String
    },
    tipo: {
        type: String,
        enum: ['Perro', 'Gato', 'Ave', 'Reptil', 'Conejos', 'Pez', 'Roedores','Otro'],
    },
    raza: {
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
        type: String,
    },
    vacunas: {
        type: [String],
        default: []
    }
    
},{
    collection: 'mascotas',
})  

module.exports = mongoose.model('Mascota', Mascota)