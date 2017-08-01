const getNotes = require('./notes')
const path = require('path')
const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const publicPath = path.join(__dirname, 'public')
const staticMiddleware = express.static(publicPath)

app.use(bodyParser)
app.use(staticMiddleware)

app.get('/notes', (req, res) => {
  getNotes()
    .then(notes => res.json(notes))
})

app.listen(3000, () => console.log('listening on 3000'))
