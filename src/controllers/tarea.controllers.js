
const tareaModels = require('../models/tarea.models');
const Tarea = require('../models/tarea.models');



const crearTarea = async (req, res) => {
    const { titulo, descripcion } = req.body;
  
    // Verificar si ya existe una tarea con el mismo título
    Tarea.findOne({ titulo })
      .then(tareaExistente => {
        if (tareaExistente) {
          return res.status(409).json({ mensaje: 'Ya existe una tarea con el mismo título.' });
        }
  
        // Crear una nueva tarea
        const nuevaTarea = new Tarea({ titulo, descripcion });
  
        // Guardar la tarea en la base de datos
        nuevaTarea.save()
          .then(tareaCreada => {
            res.json(tareaCreada);
          })
          .catch(error => {
            console.error(error);
            res.status(500).json({ mensaje: 'Ocurrió un error al crear la tarea.' });
          });
      })
      .catch(error => {
        console.error(error);
        res.status(500).json({ mensaje: 'Ocurrió un error al verificar la existencia de la tarea.' });
      });
  };
  
const verTareas = async (req, res) => {
    // Buscar todas las tareas en la base de datos
    Tarea.find({})
      .then(tareas => {
        res.status(200).json(tareas);
      })
      .catch(error => {
        console.error(error);
        res.status(500).json({ mensaje: 'Ocurrió un error al obtener las tareas.' });
      });
  };

const buscarTarea = async (req, res) => {
  const { id } = req.params;

  // Buscar la tarea por su ID en la base de datos
  Tarea.findById(id)
    .then(tareaEncontrada => {
      if (!tareaEncontrada) {
        return res.status(404).json({ mensaje: 'Tarea no encontrada.' });
      }

      // Devolver la tarea encontrada
      res.status(200).json(tareaEncontrada);
    })
    .catch(error => {
      console.error(error);
      res.status(500).json({ mensaje: 'Ocurrió un error al buscar la tarea.' });
    });
};


const editarTarea = async (req, res) => {
  const { id, nuevoTitulo, nuevaDescripcion } = req.body;

  // Buscar y actualizar la tarea por el ID en la base de datos
  Tarea.findByIdAndUpdate(id, { titulo: nuevoTitulo, descripcion: nuevaDescripcion }, { new: true })
    .then(tareaActualizada => {
      if (!tareaActualizada) {
        return res.status(404).json({ mensaje: 'Tarea no encontrada.' });
      }

      // Devolver la tarea actualizada
      res.status(200).json(tareaActualizada);
    })
    .catch(error => {
      console.error(error);
      res.status(500).json({ mensaje: 'Ocurrió un error al editar la tarea.' });
    });
};

const eliminarTarea = async (req, res) => {
  const { id } = req.params;

  // Verificar que se haya proporcionado un ID válido
  if (!id) {
    return res.status(400).json({ mensaje: 'Se requiere el ID de la tarea.' });
  }

  // Eliminar la tarea por su ID en la base de datos
  Tarea.findByIdAndRemove(id)
    .then(tareaEliminada => {
      if (!tareaEliminada) {
        return res.status(404).json({ mensaje: 'Tarea no encontrada.' });
      }

      // Devolver la tarea eliminada 
      res.status(200).json(tareaEliminada);
    })
    .catch(error => {
      console.error(error);
      res.status(500).json({ mensaje: 'Ocurrió un error al eliminar la tarea.' });
    });
};

module.exports={verTareas,crearTarea,buscarTarea,editarTarea,eliminarTarea}