const crearTarea = (rec,res)=>{
    return res.json({
        ok:true,
        data:rec.body
    })
}

module.exports={
    crearTarea
}