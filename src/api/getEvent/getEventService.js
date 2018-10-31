const _ = require('lodash')
const Event = require('../registerEvent/registerEvent')

const get5lastEvets = (req, res) => {


	Event.find({
		status:"ATIVO"})
		.sort({
			data_evento:-1})
		.limit(5).exec(function(error, result){

		if (error) {
			res.status(500).json({errors:[error]})
		} else{
			res.json(_.defaults(result))
		}
	})
}

const getlastEvets = (req, res) => {


	Event.find({})
		.sort({
			data_evento:-1}).exec(function(error, result){

		if (error) {
			res.status(500).json({errors:[error]})
		} else{
			res.json(_.defaults(result))
		}
	})
}

const getoneEvet = (req, res) => {
	const titulo = req.body.titulo

	Event.findOne({titulo}, (error, result) => {

		if (error) {
			res.status(500).json({errors:[error]})
		} else{
			res.json(_.defaults(result))
		}
	})
}

module.exports ={get5lastEvets, getlastEvets, getoneEvet}