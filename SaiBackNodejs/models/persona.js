'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var PersonaSchema = Schema({
  firstName:String,
  lastName:String,
  numeroDni:String,
  //rolPersona:String,
  date: {type:Date, default: Date.now},
  image:String
});

module.exports = mongoose.model('Persona', PersonaSchema);
// crea personas --> guarda documentos de este tipo con esta estructura.
