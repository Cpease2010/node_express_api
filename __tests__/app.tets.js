const request = require('supertest');
const app = require('../app');
const { badPathParameters } = require('../Helpers/badRequest');

describe('Controller', () => {

  describe('Route: /:user/:repo', () => {
    test('Return 200 when pass 2 path params', () => {
      return request(app)
        .get('/user_cory/repo_test')
        .expect(200)
    });
  });

  describe('Route: \'*', () => {
    test('Return 400 when path is incorrect', () => {
      return request(app)
        .get('/not_enough_information')
        .expect(res => res.text == badPathParameters)
        .expect(400)
    });

    test('Return 400 when > 2 path params', () => {
      return request(app)
        .get('/user_cory/repo_test/to_much_data')
        .expect(res => res.text == badPathParameters)
        .expect(400)
    });    
  });
});