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