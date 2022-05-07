const buildUrl = require('../Helpers/buildUrl.js')
const axios = require('axios')

const githubService = {
  getRepositoryInformation: (params) => {
    return axios.get(buildUrl(params))
      .then(response => response.data)
  }
}

module.exports = githubService