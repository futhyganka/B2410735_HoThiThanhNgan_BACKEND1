class ApiError extends Error {
    constructor(statusCode, messase) {
        super();
        this.statusCode = statusCode;
        this.messase = messase;
    }
}

module.exports = ApiError;

