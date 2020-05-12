var mongoose = require('mongoose');

var AccountSchema = new mongoose.Schema({
  holder:{type : String,  required : true},
  type:{type : String,  required : true}
});


module.exports = mongoose.model('Account',AccountSchema);
