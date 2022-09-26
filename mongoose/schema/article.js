const mongoose = require('mongoose')
const Article = new mongoose.Schema({
    content: {
        type: String,
        default: "",
        required: true,
    },
    createAt: {
        type: Date,
        default: Date.now(),
        required: true,
    },
    // author: {
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: "Author"
    // },
})

module.exports = Article