const assert = require("assert")
const buildPrUrl = require("../../Helpers/buildPrUrl")

describe('buildPrUrl()', () => {
  test('Should return an accurate URL for pull requests', () => {
    const expectedValue = 'https://api.github.com/repos/Cpease2010/money_trail/pulls'
    let actualValue = buildPrUrl({ githubUser: 'Cpease2010', githubRepository: 'money_trail' })
    assert(expectedValue === actualValue)
  })
})