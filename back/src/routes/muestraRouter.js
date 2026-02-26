const muestraRouter = require("express").Router();
const { and } = require("sequelize");
const Controller = require("../controllers/MuestraController");
const Muestra = require("../database/models/Muestra");
const Imagen = require("../database/models/Imagen");
const multer = require("multer");

muestraRouter.get("/", Controller.getMuestras);

// Obtener cassete por qr
muestraRouter.get("/muestraqr/:qr", async(req, res)=>{
  console.log("qr: " + req.params.qr);
  const muestras = await Muestra.findAll({
    where: { qr_muestra: `${req.params.qr}` },
  });
console.log(muestras);
  // Damos formato a la imagen o devolvemos null si no hya imagen
  // cassettes[0].imagen
  // ? ( cassettes[0].imagen =  cassettes[0].imagen.toString("base64"))
  // : ( cassettes[0].imagen = null);
  return res.json(muestras);
});

// Obtengo las muestras de un cassette
muestraRouter.get("/cassette/:id", async (req, res) => {
  const muestras = await Muestra.findAll({
    where: { casetteIdCasette: `${req.params.id}` },
  });
  res.json(muestras);
});

muestraRouter.get("/muestra/:id", async (req,res) => {
  const muestra = await Muestra.findOne({
    where: { id_muestra: `${req.params.id}` },
  });
  res.json(muestra);
});

/* const storage = multer.memoryStorage();
upload = multer({ storage }); */

const upload = multer({
  storage: multer.memoryStorage(),
  limits: {
    fileSize: 5 * 1024 * 1024, // límite de tamaño de archivo de 5 MB
  },
});

muestraRouter.post("/", upload.single("imagen"), async (req, res) => {
  let muestra = req.body;
  let imagenaux = {};
  try {
    muestra = { ...muestra, qr_muestra: "--m--" + Date.now() };
    const nuevamuestra = await Muestra.create(muestra);

    if (req.file) {
      imagenaux = { ...imagenaux, imagen: req.file.buffer };
      imagenaux = { ...imagenaux, muestraIdMuestra: nuevamuestra.id_muestra };
      await Imagen.create(imagenaux);
    }

    return res.json("200");
  } catch {
    (error) => console.log("no funciona" + error);
  }
});

muestraRouter.delete("/:id", async (req, res) => {
  await Imagen.destroy({
    where: { muestraIdMuestra: parseInt(req.params.id) },
    force: true,
  });
  await Muestra.destroy({
    where: { id_muestra: parseInt(req.params.id) },
    force: true,
  }); 
  res.json(req.params.id)
});

muestraRouter.put("/update/:id", async (req, res) => {
  let muestra = req.body;
  console.log("quiere modificar: " + req.params.id);
  console.log(muestra);
 /*  let oldcassette;

  oldcassette = await Casette.findOne({
    where: { id_casette: `${req.params.id}` },
  });
  cassette = { ...cassette, tecnicoIdTecnico: oldcassette.tecnicoIdTecnico };

  // Comprobamos si hay imagen. CUIDADIN  con los if, que no comparan igual....
  req.file
    ? (cassette = { ...cassette, imagen: req.file.buffer })
    : (cassette = { ...cassette, imagen: oldcassette.imagen }); */

  const updatedmuestra = await Muestra.update(
    {
      fecha: muestra.fecha,
      descripcion: muestra.descripcion,
      observaciones: muestra.observaciones,
      tincion: muestra.tincion,
      // tecnicoIdTecnico: muestra.tecnicoIdTecnico,
    },
    {
      where: {
        id_muestra: `${req.params.id}`,
      },
    }
  );
  // return res.json(200);

    res.json(updatedmuestra);
  
});


module.exports = muestraRouter;
