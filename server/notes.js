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

module.exports = getNotes
