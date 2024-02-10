export class ApiError {
    constructor(message, statusCode) {
        this.message = message;
        this.statusCode = statusCode;
    }

    static badRequest(message) {
        return new ApiError(message, 400);
    }
}