require('dotenv').config()
const mongoose = require('mongoose')
const schema = require('./schema/index')
const db = mongoose.connection

const model =(() => {
    db.on("error", console.error)
    db.on("open", () => {
        console.log("Connecting mongoDB")
    })

    mongoose.connect(`mongodb+srv://${process.env.DB_HOST}:${process.env.DB_PASSWORD}@fullstackapp.ezism3r.mongodb.net/?retryWrites=true&w=majority`)

    const model = {}

    for (let key in schema) {
        console.log(key)
        model[key] = mongoose.model(key, schema[key])
    }

    return model
})()

module.exports = model