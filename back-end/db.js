// import mongoose from 'mongoose';
// import dotenv from 'dotenv';
// dotenv.config();
// const db = mongoose.connection;
// mongoose.connection.id; 

// const options = {
//   useNewUrlParser: true,
//   useCreateIndex: true,
//   useUnifiedTopology: true,
// };

// const DB_URL =process.env.DB_URL;
// console.log('DB_URL',DB_URL)
//  export default mongoose
//   .connect(DB_URL, options)
//   .then(() => {
//     console.log('DB READY TO USE');
//   })
//   .catch((err) => {
//     console.log('ERR: ', err);
//   });

// // These lines Extra
// db.on('error', (err) => console.log('ERR:', err.message));

// db.on('connected', () => console.log('MONGO CONNECTED'));

// db.on('disconnected', () => console.log('MONGO DISCONNECTED'));

  
import mongoose from 'mongoose'

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.DB_URL, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useCreateIndex: true,
    })
    console.log('conn------------------------',conn)
    // console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline)
  } catch (error) {
    // console.error(`Error: ${error.message}`.red.underline.bold)
    // process.exit(1)
    console.log('error',error)
  }
}

export default connectDB