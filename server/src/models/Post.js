//Imports
const { Schema, model } = require("mongoose");
const slugify = require("slugify");

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
    slug: {
      type: String,
      required: true,
      unique: true
    }
  },
  {
    timestamps: true,
  }
);

postSchema.pre("validate", function(next) {
  const post = this;
  
  if(post.title) {
    post.slug = slugify(post.title, { lower: true, strict: true });
  }

  next();
})

const Post = model("Post", postSchema);

//Export
module.exports = Post;
