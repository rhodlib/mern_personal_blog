//Imports
const { Schema, model } = require("mongoose");

//Post Schema
const postSchema = new Schema(
  {
    image: String,
    title: {
      type: String,
      required: true,
    },
    description: String,
    markdown: {
      type: String,
      required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  {
    timestamps: true,
  }
);

const Post = model("Post", postSchema);

//Export
module.exports = Post;
