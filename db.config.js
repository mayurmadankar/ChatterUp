import mongoose from "mongoose";
// Database URL added in .env
const baseUrl = process.env.MONGODB;

// Connect to the database
export const connectToDatabase = async () => {
  try {
    await mongoose.connect(baseUrl);
    console.log("MongoDB connected using mongoose");
  } catch (err) {
    console.log(err);
  }
};
