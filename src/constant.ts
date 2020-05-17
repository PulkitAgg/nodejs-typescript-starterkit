export default {
    STATUS_CODE: {
        ERROR: 0,
        SUCCESS: 1
    },
    DB_MODEL_REF: {
        USER: 'User',
    },
    MESSAGES: {
        EMPTY: {},
        KEY_CANT_EMPTY: "{{key}} cannot be empty",
        INTERNAL_SERVER_ERROR: 'Something went wrong. Please try after sometime.',
        VALIDATION_ERROR: "Validation error.",
        UNAUTHORIZED_ACCESS_EXCEPTION: "Unauthorized access.",
        TOKEN_EXPIRED: "Token link has been expired.",
        ACCESS_DENIED: 'Access denied',
        INVALID_TOKEN: "Invalid Token",
        USER_NOT_FOUND: "User Not found",
        EMPTY_EMAIL: 'Please enter email id.',
        INVALID_EMAIL: 'Please enter valid email id.',
        EMPTY_PASSWORD: 'Please enter password.',
        TOKEN_GENERATE_EXCEPTION: "Error while generating access token.",
        DUPLICATE_CREDENTIAL: 'Account with this information already exist.',
        ACCOUNT_NOT_EXIST: 'Email/phone number not exist.',
        INCORRECT_PASSWORD: 'Incorrect password.',
    }
}