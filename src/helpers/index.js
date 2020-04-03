const constants = require('./constants')

const responseError = (response, error) => {
  console.log(error)
  return response.status(500).json({
    error: error.name,
    message: error.message,
  })
}

module.exports = {
  constants,
  responseError,
}