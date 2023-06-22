const { Router } = require("express");
const { crearTarea,verTareas,buscarTarea,editarTarea, eliminarTarea } = require("../controllers/tarea.controllers");

const router = Router();

//crear tarea  http://localhost:8080/api/v1/alta

router.post('/alta',crearTarea);

//ver tarea  http://localhost:8080/api/v1/vertareas
router.get('/vertareas',verTareas);

//buscar tarea  http://localhost:8080/api/v1/buscar
router.get('/buscar',buscarTarea);

//editar tarea  http://localhost:8080/api/v1/editar
router.put('/editar',editarTarea);

//eliminar tarea  http://localhost:8080/api/v1/eliminar
router.delete('/eliminar',eliminarTarea);

module.exports=router;