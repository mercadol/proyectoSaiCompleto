'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var PersonaSchema = Schema({
  title:String,
  content:String,
  date: {type:Date, default: Date.now},
  image:String
});

module.exports = mongoose.model('Persona', PersonaSchema);
// crea personas --> guarda documentos de este tipo con esta estructura.
