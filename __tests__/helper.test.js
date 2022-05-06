const assert = require("assert")
const app = require("../app")
const buildUrl = require("../Helpers/buildUrl")

describe('Helpers', () => {
  describe('buildUrl', () => {
    test('Shoudl return string containing basePath/${githubUsername}/$githubRepository', () => {
      const expectedValue = 'https://api.github.com/repos/testUser/testRepo'
      let actualValue = buildUrl({githubUser: 'testUser', githubRepository: 'testRepo'})
      assert(expectedValue === actualValue)

    })
  })
})