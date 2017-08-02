const crudNotes = require('./crud-notes')
const path = require('path')
const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const publicPath = path.join(__dirname, 'public')
const staticMiddleware = express.static(publicPath)

app.use(bodyParser.json())
app.use(staticMiddleware)

app.get('/notes', (req, res) => {
  crudNotes.getNotes()
    .then(notes => res.json(notes))
    .catch(error => {
      res.sendStatus(500)
      console.log(error)
    })
})

app.post('/notes', (req, res) => {
  const noteBody = req.body
  crudNotes.addNote(noteBody)
    .then(report => {
      res.sendStatus(201)
    })
    .catch(error => {
      console.log(error)
      res.sendStatus(500)
    })
})

app.listen(3000, () => console.log('listening on 3000'))
