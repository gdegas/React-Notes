require('dotenv').config()
const { describe, it } = require('mocha')
const { expect } = require('chai')
const request = require('request')

describe('Server Requests', () => {

  const url = 'http://localhost:' + process.env.PORT + '/notes'

  it('returns a JSON object', done => {
    request.get(url, { json: true }, function (error, response, body) {
      expect(error).to.equal(null)
      expect(body).to.be.an('array')
      done()
    })
  })
  it('saves a new note', done => {
    const json = { title: 'Test Note', content: 'Lorem ipsum...' }
    request.post(url, { json }, (err, res, body) => {
      expect(err).to.equal(null)
      expect(res).to.have.property('statusCode', 201)
      expect(body)
        .to.be.an('object')
        .with.property('id')
        .that.is.a('number')
      done()
    })
  })
  it('deletes a note by id', done => {
    request(url, { json: true }, (err, res, body) => {
      if (err) return done(err)
      const [ note ] = body
      expect(body).not.to.equal(undefined)
      const { id } = note
      request.delete(url + '/' + id, (err, res) => {
        expect(err).to.equal(null)
        expect(res).to.have.property('statusCode', 204)
        done()
      })
    })
  })
})
