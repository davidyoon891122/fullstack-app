const mongoose = require('mongoose')
const schema = require('./schema/index')
require('dotenv').config()

const db = mongoose.connection
const model =(() => {
    db.on("error", console.error)
    db.on("open", () => {
        console.log("Connecting mongoDB")
    })

    mongoose.connect(`mongodb+srv://${process.env.DB_ID}:<${process.env.DB_PASSWORD}>@fullstackapp.xbsxdmn.mongodb.net/?retryWrites=true&w=majority`)

    const model = {}

    for (let key in schema) {
        model[key] = mongoose.model(key, schema[key])
    }

    return model
})()

module.exports = model