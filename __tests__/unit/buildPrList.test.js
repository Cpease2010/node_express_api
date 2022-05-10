const assert = require("assert")
const { stubCommits } = require('../testData/stub.commits')
const { stubPullRequests } = require('../testData/stub.pullRequests')
const { stubResponseData } = require('../testData/stub.responseData')
const buildPrlist = require("../../Helpers/buildPrList")

describe('buildPrList(pullRequests, prData)', () => {
  test('Create a list of Pull Requests Objects', () => {
    let expectedResult = stubResponseData
    let actualResult = buildPrlist(stubPullRequests, stubCommits)
    expect(actualResult).toEqual(expectedResult)
  })
})