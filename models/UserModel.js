import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: {
    type: String,
    required: true,
    lowercase: true,
    trim: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    trim: true,
  },
  role: {
    type: String,
    enum: ["admin"],
    default: "admin",
  },
});

const UserModel = mongoose.model("User", UserSchema);
export default UserModel;
