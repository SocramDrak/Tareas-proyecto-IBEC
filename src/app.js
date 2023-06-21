//importo express
const express = require ('express');
//creo una instancia de expres y se la asigno a app
const app = express();

const dbConection= require('./db/db.config')

dbConection();

app.use(express.json());
// grupo de rutas 
app.use('/api/v1',require('./routes/tarea.routes'));




app.listen(8080,(rec,res)=>{
    console.log('servidor corriendo')
} )