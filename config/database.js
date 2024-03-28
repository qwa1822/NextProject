import mongoose from "mongoose";

let connected = false;

const connectDb = async () => {
  mongoose.set("strictQuery", true);

  // If the databse is aleay connected , don't connect again

  if (connected) {
    console.log("MongoDb is alreadty connected");
    return;
  }

  // Connect to MongoDB
  try {
    await mongoose.connect(process.env.MONGODB_URL);
    connected = true;

    console.log("MongoDb Connected");
  } catch (error) {
    console.log(error);
  }
};

export default connectDb;
