const mongoose = require('mongoose');

const dbConection = async()=>{
  try{
    await mongoose.connect('mongodb+srv://ibectareas:rc63Tl6dZXHdhh13@cluster0.zpwmdyx.mongodb.net/?retryWrites=true&w=majority')
    console.log('Connection to database ok')
} catch (error){
    console.error(error)
}
}

module.exports =dbConection;
