const db = require("../models");
const caballos = db.caballos;

exports.findAll = async (req, res) => {
  const respuesta = await caballos.findAll({
    //where: { std_sexo: req.query.sexo },
    raw: true,
  });
  res.send(respuesta);
};

exports.create = async (req, res) => {
  try {
    const lista = {
      cbl_nombre: req.body.nombre,
      cbl_edad: req.body.edad,
      cbl_sexo: req.body.sexo,
      cbl_color: req.body.color
    };
    console.log(lista,caballos);
    const respuesta = await caballos.create(lista);
    res.send(respuesta);
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .send({ mensaje: error.message || "Se presento error insertando" });
  }  
};
