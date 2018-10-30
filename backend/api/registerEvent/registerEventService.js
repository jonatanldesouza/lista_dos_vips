const RegisterEvent = require('./registerEvent')

RegisterEvent.methods(['get', 'post', 'put', 'delete'])
RegisterEvent.updateOptions({new: true, runValidators: true})

module.exports = RegisterEvent;