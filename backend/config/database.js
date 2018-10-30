const mongoose = require('mongoose')
module.exports = mongoose.connect('mongodb://localhost/db_listadosvips')

mongoose.Error.messages.general.required = "O atributo '{PATH}' é obrigatório."
mongoose.Error.messages.String.enum = "'{VALUE}' não é válido para o atributo '{PATH}'"