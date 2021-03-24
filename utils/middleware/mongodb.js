import mongoose from 'mongoose';

async function dbConnect() {
  if (mongoose.connections[0].readyState) return;
  return mongoose.connect(process.env.DB_CONN_STR,{
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
}


export default dbConnect;