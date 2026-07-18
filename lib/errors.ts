export class AppError extends Error {
    constructor(
        public message: string,
        public code: string,
        public statusCode: number = 500
    ) {
        super(message);
        this.name = "AppError";
    }
}

export class NotFoundError extends AppError {
    constructor(message = "Not found") {
        super(message, "NOT_FOUND", 404);
        this.name = "NotFoundError";
    }
}

export class UnauthorizedError extends AppError {
    constructor(message = "Unauthorized") {
        super(message, "UNAUTHORIZED", 401);
        this.name = "UnauthorizedError";
    }
}

export class ValidationError extends AppError {
    constructor(message = "Validation failed") {
        super(message, "VALIDATION_ERROR", 400);
        this.name = "ValidationError";
    }
}
