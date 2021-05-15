import mongoose from "mongoose";
import dotenv from 'dotenv';
dotenv.config();

const dbConnect = async () => {
  try {
    if (mongoose.connections[0].readyState) return;
    return mongoose.connect(process.env.DB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  } catch (error) {
      console.log('Ocurrió un error al conectarse con la base de datos')
  }
};
export default dbConnect;
