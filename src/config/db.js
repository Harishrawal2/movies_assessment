import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const MongoDBConnection = async () => {
  try {
    const DB = await mongoose.connect(process.env.MONGO_URL, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
    console.log(`Database connection successfull ${DB.connection.host}`);
  } catch (error) {
    console.log(`Database connection failed ${error}`);
  }
};

export default MongoDBConnection;
