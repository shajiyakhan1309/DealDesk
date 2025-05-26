import mongoose from "mongoose"

const UserSchema = new mongoose.Schema({
        username: String,
        email: String,
        message: String,
      });
      
export const User = mongoose.model("User",UserSchema)