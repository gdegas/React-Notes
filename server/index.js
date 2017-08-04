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
    .then(note => {
      res.status(201).json(note)
    })
    .catch(error => {
      console.log(error)
      res.sendStatus(500)
    })
})

app.delete('/notes/:id', (req, res) => {
  const noteId = parseInt(req.params.id, 10)
  crudNotes.deleteNote(noteId)
  .then(() => res.sendStatus(204))
  .catch((error) => console.log(error))
})

app.listen(process.env.PORT, () => console.log('listening on: ' + process.env.PORT))
