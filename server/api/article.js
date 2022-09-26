const { Model } = require('mongoose')
const model = require('../mongoose/model')

// Create
const articleCreate = async (req, res) => {
    const { content } = req.body

    const newArticle = await model.Article({ content })
    const saveRequest = await newArticle.save()
    console.log(saveRequest)
    res.send(saveRequest)
}

// Read
const articleRead = async (req, res) => {
    const articles = await model.Article.find({})
    res.send(articles)
}
// Update
const articleUpdate = async (req, res) => {
    const { id, content } = req.body
    const updatedArticle = await model.Article.findByIdAndUpdate(id, { content })
    res.send(updatedArticle)
}
// Delete
const articleDelete = async (req, res) => {
    const { id } = req.params
    const deleteArticle = await model.Article.findOneAndDelete({ id })
    res.send(deleteArticle)
}

module.exports =  {
    articleCreate,
    articleDelete,
    articleRead,
    articleUpdate
}