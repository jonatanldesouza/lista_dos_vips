const restful = require('node-restful')
const mongoose = restful.mongoose

const userSchema = new mongoose.Schema({
	login:{type: String, required:[true, 'Informe o login']},
	name:{type: String, required:[true, 'Informe o nome']},
	password:{type: String, required:[true, 'Informe a senha']},
	status:{type: String, required: false, uppercase:true,
	  enum: ['ATIVO', 'INATIVO']}
})

module.exports = restful.model('user', userSchema)