let responseHandler = {
    valid: (weatherInfoResult) => {
        return {
            HttpStatusCode: "200",
            result:{weatherInfoResult}
        }
    },
    invalid: {
        HttpStatusCode: 422,
        error: {
            Type: "Invalid City",
            Message: "City name is invalid or does not exist.",
        }
    },  
    serverError: (error) => {
        return {
            HttpStatusCode: 500,
            error: {
                Type: "Server Error",
                Message: "Server Error:" [error],
            }
        }
    },
    notFound: {
        HttpStatusCode: 404,
        error: {
            Type: "Not found",
            Message: "Item not found ¡Sorry!",
        }
    }
}

module.exports = responseHandler;