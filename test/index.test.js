const { describe, it } = require('mocha')
const { expect } = require('chai')
const request = require('request')

describe('Server Requests', () => {

  it('returns a JSON object', done => {
    request.get('http://localhost:3000/notes', { json: true }, function (error, response, body) {
      expect(error).to.equal(null)
      expect(body).to.be.an('array')
      done()
    })
  })
})
