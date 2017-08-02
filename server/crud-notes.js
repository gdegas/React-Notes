const knex = require('knex')({
  dialect: 'pg',
  connection: 'postgres://localhost:5432/react-notes'
})

function getNotes() {
  const query = knex
    .select('*')
    .from('notes')
  return query
}

function addNote(note) {
  const query = knex
    .insert(note)
    .into('notes')
    .returning('*')
  return query
}

function deleteNote(id) {
  const query = knex
    .where('id', id)
    .delete()
  return query
}

module.exports = {
  getNotes,
  addNote,
  deleteNote
}
