const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    author: {
      type: String,
      required: true,
      trim: true,
    },
    genre:{
        type: String, 
        optional:true,
    },
    publishedYear:{
        type: Number,
        optional:true,
    },
    status:{
        type: String,
        enum:["unread","reading","read"],
        required:true,
    },
    createdAt:{
        type: Date,
        default:Date.now
    }
   
  },
);

module.exports = mongoose.model("Book", bookSchema);
