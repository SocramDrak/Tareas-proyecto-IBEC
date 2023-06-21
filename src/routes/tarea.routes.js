const { Router } = require("express");
const { crearTarea } = require("../controllers/tarea.controllers");

const router = Router();

//crear tarea  http://localhost:8080/api/v1/alta/

router.post('/',crearTarea)

module.exports=router;