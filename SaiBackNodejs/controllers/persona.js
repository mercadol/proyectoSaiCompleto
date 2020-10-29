'use strict'
var validator = require('validator');
var fs = require('fs');
var path =require('path');
var Persona = require('../models/persona');

var controller = {

  test:(req, res) => {
    return res.status(200).send({
      message: 'Soy la accion test de mi controlador de Personas'
    });
  },

  save: (req, res) => {
    //Recoger parametros por post
    var params = req.body; // averiguar como se envia este objeto
    console.log(params);
    // Validar datos (Validator)
    try {
      var validate_firstName = !validator.isEmpty(params.firstName);
      var validate_lastName = !validator.isEmpty(params.lastName);
      var validate_numeroDni= !validator.isEmpty(params.numeroDni);


    } catch (err) {
      return res.status(200).send({
        status: 'error',
        menssage: 'faltan datos por enviar!'
      });
    }

    if (validate_firstName && validate_lastName && validate_numeroDni) {
      //Crear el objeto a guardar
      var persona = new Persona();
      //Asignar valores
      persona.firstName = params.firstName;
      persona.lastName = params.lastName;
      persona.numeroDni= params.numeroDni;
      if(params.image){
        persona.image=params.image;
      }else{
        persona.image = null;
      }

      //Guardar personas
      persona.save((err, personaStored)=>{
        if(err || !personaStored){
          return res.status(404).send({
            status: 'error',
            menssage: 'el persona no se a guardado'
          });
        }else {
          //Devolver una respuesta.
          return res.status(200).send({
            status: 'success',
            persona: personaStored
          });
        }
      });

    } else {
      return res.status(200).send({
        status: 'error',
        menssage: 'los datos no son validos'
      });
    }

  },

  getPersonas: (req, res) => {

    var querty = Persona.find({});

    var last = req.params.last;
    if (last || last != undefined){
      querty.limit(5);
    }
    console.log(last);
    //find
    // con sort puedo ordenar la lista resultante de la busqueda
    querty.sort('-_id').exec((err, personas) =>{
      if (err) {
        return res.status(500).send({
          status: 'error',
          menssage: 'Error al devolver los personas'
        });
      }
      if (!personas) {
        return res.status(404).send({
          status: 'error',
          menssage: 'Error, no hay personas para mostrar'
        });
      }
      return res.status(200).send({
        status: 'success',
        personas
      });
    });

  },

  getPersona: (req, res) => {
    //Recoger el id de la url
    var personaId = req.params.id;
    //comprobar que existe
    if (!personaId || personaId == null) {
      return res.status(404).send({
        status: 'error',
        menssage: 'No existe el persona'
      });
    }
    //buscarel persona
    Persona.findById(personaId, (err, persona) => {
      if (err) {
        return res.status(500).send({
          status: 'error',
          menssage: 'Error al devolver los datoss'
        });
      }
      if (!persona) {
        return res.status(404).send({
          status: 'error',
          menssage: 'no existe el persona'
        });
      }
      //devolver
      return res.status(200).send({
        status: 'success',
        persona
      });
    });
  },

  update: (req, res) => {
    //Recoger el id de la url
    var personaId = req.params.id;
    // Los datos que llegan por put
    var params = req.body;

    //validar datos
    try {
      var validate_firstName = !validator.isEmpty(params.firstName);
      var validate_lastName = !validator.isEmpty(params.lastName);

    } catch (err) {
      return res.status(404).send({
        status: 'error',
        menssage: 'Faltan datos por enviar!!'
      });
    }

    if(validate_firstName && validate_lastName){
      //Find update
      Persona.findOneAndUpdate({_id: personaId}, params, {new:true}, (err, personaUdated) => {
        if (err){
          return res.status(500).send({
            status: 'error',
            menssage: 'Error al actualizar!!'
          });
        }
        if (!personaUdated){
          return res.status(404).send({
            status: 'error',
            menssage: 'No existe el persona!!'
          });
        }
        return res.status(200).send({
          status: 'success',
          persona: personaUdated
        });
      });
    }else {
      return res.status(200).send({
        status: 'error',
        menssage: 'La validacion no es correcta!!'
      });
    }
    return res.status(404).send({
      status: 'error',
      menssage: 'No existe el persona'
    });
  },

  delete: (req, res) => {
    // Recoger el id de la url
    var personaId = req.params.id;
    // Find and delete
    
    Persona.findOneAndDelete({_id: personaId}, (err, personaRemoved) =>{
      if(err){
        return res.status(500).send({
          status: 'error',
          menssage: 'Error al borrar!!'
        });
      }
      if(!personaRemoved){
        return res.status(404).send({
          status: 'error',
          menssage: 'No se a borrado el persona, posiblemente no exista!!'
        });
      }
      return res.status(200).send({
        status: 'success',
        menssage: 'el persona fue eliminado',
        persona: personaRemoved
      });
    });

  },//borrar

  //trasladar a un buisneslogic
  upload: (req, res) =>{
    // configurar el modulo connect multiparty router/persona.js(ya esta hecho)
    // Recoger el fichero de la peticion()
    var file_name = 'Imagen no subida...';
    if(!req.files){
      return res.status(404).send({
        status: 'error',
        message: file_name
      });
    }
    // Conseguir nombre y extencion del archivo
    var file_path = req.files.file0.path;
    var file_split = file_path.split('\\');
  //  /*** *ADVERTENCIA* EN UNIX(LINUZ O MAC) ***/
  // var file_split = file_path.split('/'); UNA SOLA BARRA EN VES DE DOS.

  //nombre del archivo
    var file_name = file_split[2];
    //Extencion el fichero
    var extension_split= file_name.split('\.');
    var file_ext = extension_split[1];

    // Comprobar la extencion del archivo, solo imagenes o borrar el fichero
    if (file_ext != 'png' && file_ext != 'jpg' && file_ext != 'jpeg' && file_ext != 'gif') {
      // borrar el archivo
      fs.unlink(file_path, (err) => {
        return res.status(200).send({
          status: 'error',
          message: 'la extencion del archivo no es valida'
        });
      });
    }else {
      // si es valido, sacando ide de la url
      var personaId = req.params.id;

      if(personaId){

        //  Bucar el persona, asignarle el nombre de la imagen y actualizarlo
        Persona.findOneAndUpdate({_id: personaId}, {image: file_name}, {new:true}, (err, personaUdated) =>{

          if (err || !personaUdated){
            return res.status(200).send({
              status: 'error',
              message: 'Error al guardar la image de persona'
            });
          }
          return res.status(200).send({
            status: 'success',
            persona: personaUdated
          });
        });

      }else{
        return res.status(200).send({
          status: 'success',
          image: file_name
        });
      }

    }
  },//end upload file

  getImage: (req, res) => {
    var file = req.params.image;
    var path_file = './upload/personas/'+file;

    fs.exists(path_file, (exists) =>{
      console.log(exists);
      if (exists) {
        return res.sendFile(path.resolve(path_file));
      }else {
        return res.status(404).send({
          status: 'error',
          message: 'la imagen no existe'
        });
      }
    });
  },//end getImage

  search: (req, res) => {
    var searchString = req.params.search;
    //find
    Persona.find({ "$or":[
      {"firstName": {"$regex": searchString, "$options": "i"}},
      {"lastName": {"$regex": searchString, "$options": "i"}}
    ]})
    .sort([['date', 'descending']])
    .exec((err, personas) =>{

      if(err){
        return res.status(500).send({
          status: 'error',
          message: 'existe un error en la peticion!!',
        });
      }

      if(!personas || personas.length <= 0){
        return res.status(404).send({
          status: 'error',
          message: 'No existe un persona que coincida con tu buquea',
        });
      }

      return res.status(200).send({
        status: 'success',
        personas
      });
    });
  }
};// este es el final de mi controller{end controler}

module.exports = controller;
