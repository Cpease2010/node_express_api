const request = require('supertest')
const app = require('../app')
const { badPathParameters } = require('../Helpers/badRequest')

describe('Controller', () => {

  describe('Route: /:githubUser/:githubRepository', () => {
    test('Return 200 when pass 2 path params', () => {
      return request(app)
        .get('/Cpease2010/money_trail')
        .expect(200)
    })
  })

  describe('Route: \'*\'', () => {
    test('Return 400 when path is incorrect', () => {
      return request(app)
        .get('/Cpease2010')
        .expect(res => res.text == badPathParameters)
        .expect(400)
    })

    test('Return 400 when > 2 path params', () => {
      return request(app)
        .get('/Cpease2010/money_trail/tothetop')
        .expect(res => res.text == badPathParameters)
        .expect(400)
    })    
  })
})