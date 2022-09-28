const express = require('express')
const { Article } = require("./api")
const cors = require('cors')
const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
    res.send("Hello Express")
})

app.post('/create', Article.articleCreate)

app.get('/articles', Article.articleRead)

app.patch('/update', Article.articleUpdate)

app.delete('/delete', Article.articleDelete)

const PORT = 3000

app.listen(PORT, "localhost", () => {
    console.log(`App Listening at http://localhost${PORT}`)
})