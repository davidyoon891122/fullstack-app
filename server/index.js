const express = require('express')

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
    res.send("Hello Express")
})

const PORT = 3000

app.listen(PORT, "localhost", () => {
    console.log(`App Listening at http://localhost${PORT}`)
})