const express = require('express')
const mascotaRouter = express.Router()

//Declaramos un objeto de nuestro modelo

let Mascota = require('../models/Mascota')

// Agregar una nueva mascota

mascotaRouter.route('/agregar').post((req, res) => {
    Mascota.create(req.body)
        .then((data) => {
            console.log('Se agregó una mascota correctamente')
            res.send(data)
        })
        .catch((error) => {
            console.error(error)
            res.status(500).send('Error al agregar mascota')
        })
})

// Obtener todas las mascotas registradas

mascotaRouter.route('/mascotas').get((req, res) => {
    Mascota.find()
        .then((data) => {
            res.send(data)
        })
        .catch((error) => {
            console.error(error)
            res.status(500).send('Error al obtener mascotas')
        })
})

// Obtener una sola mascota por su ID

mascotaRouter.route('/mascota/:id').get((req, res) => {
    Mascota.findById(req.params.id)
        .then((data) => {
            res.send(data)
        })
        .catch((error) => {
            console.error(error)
            res.status(500).send('Error al obtener mascota')
        })
})

// Actualizar información de una mascota por su ID

mascotaRouter.route('/actualizar/:id').put((req, res) => {
    Mascota.findByIdAndUpdate(req.params.id, {
        $set: req.body
    }, { new: true }) 
        .then((data) => {
            console.log('La mascota se actualizó correctamente')
            res.send(data)
        })
        .catch((error) => {
            console.error(error)
            res.status(500).send('Error al actualizar mascota')
        })
})

// Eliminar una mascota por su ID

mascotaRouter.route('/eliminar/:id').delete((req, res) => {
    Mascota.findByIdAndDelete(req.params.id)
        .then((data) => {
            console.log('La mascota se eliminó correctamente')
            res.send({ message: 'Mascota eliminada correctamente', data: data })
        })
        .catch((error) => {
            console.error(error)
            res.status(500).send('Error al eliminar mascota')
        })
})

module.exports = mascotaRouter
