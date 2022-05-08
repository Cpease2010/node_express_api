const request = require('supertest')
const app = require('../../app')

describe('Route: /:githubUser/:githubRepository', () => {
  it('Return 200 when pass 2 path params', () => {
    return request(app)
      .get('/Cpease2010/money_trail')
      .expect(200)
  })
})