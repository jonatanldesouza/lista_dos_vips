const restful = require('node-restful')
const mongoose = restful.mongoose

const eventSchema = new mongoose.Schema({
	titulo:{type: String, required:[true, 'Informe o titulo']},
	descricao:{type: String, required:[true, 'Informe a descricao']},
	data_geracao: { type: Date, default: Date.now },
	data_evento:{ type: String, required:[true]},
	status:{type: String, required: false, uppercase:true,
	  enum: ['ATIVO', 'INATIVO']},
	localizacao:{type: String, required:[true, 'Informe a localização']} 
})

module.exports = restful.model('registerEvent', eventSchema)
