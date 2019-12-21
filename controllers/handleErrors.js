let handleErrors = {
    invalid: {
        Type: "Invalid City",
        Message: "City name is invalid or does not exist.",
        HttpStatusCode: 422
      },  
    server: (error) => {
        return {
            Type: "Server Error",
            Message: "Server Error:" [(error)],
            HttpStatusCode: 500
        }
      }
}

module.exports = handleErrors;