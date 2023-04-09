import mongoose from 'mongoose'
import config from '../config.js'


const URI_MONGO = config.uri_mongo

try{
  await mongoose.connect(URI_MONGO)
  console.log('Conectando a la base de datos')
} catch (error) {
  console.log(error)
}

// mongoose.connect(URI_MONGO, (error) => {
//   if (error) {
//     console.log(error)
//   } else {
//     console.log('Conectado a la base de datos')
//   }
// })