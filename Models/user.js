import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  name: String,
  email: String,
  phoneNumber: Number,
  password: String,
  interests: Array,
});

let userMessage = mongoose.model("UserMessage", userSchema);

export default userMessage;
