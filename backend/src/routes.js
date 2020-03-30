const express = require('express')
const connection = require('./database/connection')
const OngController = require('./constrollers/OngController')
const IncidentController = require('./constrollers/IncidentController')
const ProfileController = require('./constrollers/ProfileController')
const SessionController = require('./constrollers/SessionController')

const routes = express.Router() // desacoplando o metodo de rotas do express a uma variavel

routes.post('/sessions', SessionController.create) // criar uma sessao de loguin, nao necessariamente inserir algo dentro do db

routes.get('/ongs', OngController.index)
routes.post('/ongs', OngController.create)

routes.get('/profile', ProfileController.index)

routes.get('/incidents', IncidentController.index)
routes.post('/incidents', IncidentController.create)
routes.delete('/incidents/:id', IncidentController.delete)


module.exports = routes