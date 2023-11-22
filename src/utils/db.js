import mongoose from "mongoose";

const connect = async () => {
  try {
    mongoose.set("strictQuery", false);
    await mongoose.connect(process.env.MONGO);
  } catch (error) {
    throw new Error("connection faild");
  }
};

export default connect;
