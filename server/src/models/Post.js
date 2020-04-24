//Imports
const { Schema, model } = require("mongoose");
const marked = require("marked");
const createDomPurify = require("dompurify");
const { JSDOM } = require("jsdom");

const dompurify = createDomPurify(new JSDOM().window);

//Post Schema
const postSchema = new Schema({
    image: String,
    title: {
        type: String,
        required: true
    },
    description: String,
    markdown: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    sanitizedHTML: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});

const Post = model("Post", postSchema);

postSchema.pre("validate", function(next) {
    if(this.markdown){
        this.sanitizedHTML = dompurify.sanitize(marked(this.markdown));
    }

    next();
})

//Export
module.exports = Post;