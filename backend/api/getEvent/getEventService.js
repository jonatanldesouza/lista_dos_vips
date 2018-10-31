const _ = require('lodash')
const Event = require('../registerEvent/registerEvent')

function get5lastEvets(req, res) {


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

module.exports = {get5lastEvets}