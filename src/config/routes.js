const express = require('express')
const auth = require('./auth')

module.exports = function(server){

	//rotas abertas
	const openApi = express.Router()
	server.use('/oapi', openApi)


	const AuthService = require('../api/user/authService')
	const GetEventService = require('../api/getEvent/getEventService')

	openApi.post('/login',AuthService.login)
	openApi.post('/signup', AuthService.signup)
	openApi.post('/validateToken', AuthService.validateToken)
	openApi.post('/getfive', GetEventService.get5lastEvets)
	openApi.post('/getlast', GetEventService.getlastEvets)
	openApi.post('/getone', GetEventService.getoneEvet)


	//Rotas protegidas por token
	const protectedApi = express.Router()
	server.use('/api', protectedApi)

	protectedApi.use(auth)

	const registerEventService = require ('../api/registerEvent/registerEventService')
	registerEventService.register(protectedApi, '/registerEvents')
	
}