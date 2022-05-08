const request = require('supertest')
const app = require('../../app')
const assert = require('assert')
const { badRequestMessage } = require('../../Helpers/badRequest')

describe('Route: \'*\'', () => {
    it('Return 400 when path is incorrect', () => {
      return request(app)
        .get('/Cpease2010')
        .expect(400)
        .then(response => {
          assert(response.body['Error Message'] === badRequestMessage)
          assert(response.body['Error Message'] !== 'badRequestMessage')
        })
    })

    it('Return 400 when > 2 path params', () => {
      return request(app)
        .get('/Cpease2010/money_trail/tothetop')
        .expect(400)
        .then(response => {
          assert(response.body['Error Message'] === badRequestMessage)
          assert(response.body['Error Message'] !== 'badRequestMessage')
        })
    })
  })