import constants from './constant';

class Exception {
    errorCode: number
    errorMessage: string
    errors: any
    constructor(errorCode: number, message: string, errorStackTrace: any = '') {
        this.errorCode = errorCode;
        this.errorMessage = message;
        if (errorStackTrace) {
            this.errors = errorStackTrace;
        }
    }
}

export default {
    intrnlSrvrErr: function (err: any): Exception {
        return new Exception(1001, constants.MESSAGES.INTERNAL_SERVER_ERROR, err);
    },
    emptyEmail: function (): Exception {
        return new Exception(1002, constants.MESSAGES.EMPTY_EMAIL)
    },
    invalidEmail: function (): Exception {
        return new Exception(1003, constants.MESSAGES.INVALID_EMAIL)
    },
    emptyPassword: function (): Exception {
        return new Exception(104, constants.MESSAGES.EMPTY_PASSWORD)
    },
    duplicateCredential: function (err: any): Exception {
        return new Exception(105, constants.MESSAGES.DUPLICATE_CREDENTIAL, err)
    },
    invalidToken: function (err: any): Exception {
        return new Exception(1006, constants.MESSAGES.INVALID_TOKEN, err);
    },
    passwordIncorrect: function (): Exception {
        return new Exception(1017, constants.MESSAGES.INCORRECT_PASSWORD)
    },
    accountNotExist: function (): Exception {
        return new Exception(1018, constants.MESSAGES.USER_NOT_FOUND)
    },


    unauthorizeAccess: function (err: any): Exception {
        return new Exception(1019, constants.MESSAGES.UNAUTHORIZED_ACCESS_EXCEPTION, err)
    },
    tokenGenException: function (err: any): Exception {
        return new Exception(1020, constants.MESSAGES.TOKEN_GENERATE_EXCEPTION, err)
    },
};
