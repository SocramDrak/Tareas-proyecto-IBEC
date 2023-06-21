const Tarea = require('../models/tarea.models');

const crearTarea = async (rec,res)=>{
   try {
    const newTarea = await Tarea.create(rec.body);
    
    return res.status(200).json({
        ok:true,
        msg: 'Tarea creada excitosamente',
        data: newTarea
    })
   } catch (error){
    console.error(error);   
    return res.status(500).json({
        ok:false,
        msg: 'Error creando producto'            
    })
    
   }
}

module.exports={crearTarea}