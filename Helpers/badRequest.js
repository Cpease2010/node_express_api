const badRequestMessage = 'Request Failed! Please check your path parameters and try again: /username/repository_name. If the problem persists please try again later.'

const badRequest = (req, res) =>
  res.status(400).send({ "Error Message": badRequestMessage, "Parameters": req.params })

module.exports = { badRequest, badRequestMessage }