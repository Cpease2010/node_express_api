const buildUrl = ({githubUser, githubRepository}) => `https://api.github.com/repos/${githubUser}/${githubRepository}`

module.exports = buildUrl