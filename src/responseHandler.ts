import constant from './constant';
import customException from './customException';

class APIResponse {
    customStatus: number
    time: Date
    responseData: any
    error: any
    constructor(statusCode: number, result: any) {
        this.customStatus = statusCode;
        if (statusCode == constant.STATUS_CODE.SUCCESS) {
            result ? this.responseData = result : constant.MESSAGES.EMPTY;
        } else {
            result ? this.error = result : constant.MESSAGES.EMPTY;
        }
        this.time = new Date();
    }
}

function sendResponse(response: any, result: any): any {
    // send status code 200
    return response.send(result);
}

export function sendError(response: any, error: any): any {
    if (!error.errorCode) {
        error = customException.intrnlSrvrErr(error);
    }
    const result = new APIResponse(constant.STATUS_CODE.ERROR, error);
    sendResponse(response, result);
}

export function sendSuccess(response: any, result: any): any {
    const resultResponse = new APIResponse(constant.STATUS_CODE.SUCCESS, result);
    sendResponse(response, resultResponse);
}