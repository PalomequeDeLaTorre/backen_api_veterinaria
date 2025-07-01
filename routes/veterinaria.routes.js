const express = require('express')
const veterinariaRouter = express.Router()

//Declaramos un objeto de nuestro modelo

let Veterinaria = require('../models/Veterinaria')

// Agregar un nuevo animal

veterinariaRouter.route('/agregar').post((req, res) => {
    Veterinaria.create(req.body)
        .then((data) => {
            console.log('Se agregó un animal correctamente')
            res.send(data)
        })
        .catch((error) => {
            console.error(error)
            res.status(500).send('Error al agregar animal')
        })
})

// Obtener todos los animales registrados

veterinariaRouter.route('/animales').get((req, res) => {
    Veterinaria.find()
        .then((data) => {
            res.send(data)
        })
        .catch((error) => {
            console.error(error)
            res.status(500).send('Error al obtener animales')
        })
})

// Obtener un solo animal por su ID

veterinariaRouter.route('/animal/:id').get((req, res) => {
    Veterinaria.findById(req.params.id)
        .then((data) => {
            res.send(data)
        })
        .catch((error) => {
            console.error(error)
            res.status(500).send('Error al obtener animal')
        })
})

// Actualizar información de un animal

veterinariaRouter.route('/actualizar/:id').put((req, res) => {
    Veterinaria.findByIdAndUpdate(req.params.id, {
        $set: req.body
    }, { new: true }) 
        .then((data) => {
            console.log('El animal se actualizó correctamente')
            res.send(data)
        })
        .catch((error) => {
            console.error(error)
            res.status(500).send('Error al actualizar animal')
        })
})

// Eliminar un animal

veterinariaRouter.route('/eliminar/:id').delete((req, res) => {
    Veterinaria.findByIdAndDelete(req.params.id)
        .then((data) => {
            console.log('El animal se eliminó correctamente')
            res.send({ message: 'Animal eliminado correctamente', data: data })
        })
        .catch((error) => {
            console.error(error)
            res.status(500).send('Error al eliminar animal')
        })
})

module.exports = veterinariaRouter
