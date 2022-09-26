const model = require('../mongoose/model')

// Create
const articleCreate = async (req, res) => {
    const { content } = req.body

    const newArticle = await model.Article({ content })
    const saveRequest = await newArticle.save()
    console.log(saveRequest)
    res.send(true)
}

// Read
const articleRead = (req, res) => {
    
}
// Update
const articleUpdate = (req, res) => {
    
}
// Delete
const articleDelete = (req, res) => {
    
}

module.exports =  {
    articleCreate,
    articleDelete,
    articleRead,
    articleUpdate
}