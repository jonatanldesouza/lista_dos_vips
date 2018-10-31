const restful = require('node-restful')
const mongoose = restful.mongoose

const userSchema = new mongoose.Schema({
	name:{type: String, required:[true, 'Informe o login']},
	email:{type: String, required:[true, 'Informe o email']},
	password:{type: String, min: 6, max:12, required:[true, 'Informe a senha']},
	status:{type: String, required: false, uppercase:true,
	  enum: ['ATIVO', 'INATIVO']}
})

module.exports = restful.model('user', userSchema)