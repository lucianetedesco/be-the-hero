const express = require('express');

const OngController = require('./controllers/OngController')
const IncidentController = require('./controllers/IncidentController')
const ProfileController = require('./controllers/ProfileController')
const SessionController = require('./controllers/SessionController')

const routes = express.Router();

routes.post('/session', SessionController.create);

routes.post('/ongs', OngController.create);
routes.get('/ongs', OngController.index);

routes.post('/incident', IncidentController.create);
routes.get('/incident', IncidentController.index);
routes.delete('/incident/:id', IncidentController.delete);

routes.get('/profile', ProfileController.index);

module.exports = routes
