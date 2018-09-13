const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/exmo', {
  useNewUrlParser: true
})

//create instance of schema
let mongoSchema = mongoose.Schema;

//create user schema
let userSchema = {
  userName: String,
  userPassword: String
}

module.exports = mongoose.model('userLogin', userSchema)