const buildPrUrl = ({githubUser, githubRepository}) => `https://api.github.com/repos/${githubUser}/${githubRepository}/pulls`

module.exports = buildPrUrl