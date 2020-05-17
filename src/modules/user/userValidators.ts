import { isEmpty, toLower, } from 'lodash';
import { validationMessage, isValidEmail } from '../../utility';
import customException from '../../customException'
/**
 * check validation for signup.
 */
export const validateSignUp = function (req: any, res: any, next: Function): null {
    let { email } = req.body;
    const { password } = req.body;
    email = req.body.email = toLower(email);
    if (isEmpty(email)) {
        return validationMessage(res, customException.emptyEmail())
    } else if (!isValidEmail(email)) {
        return validationMessage(res, customException.invalidEmail())
    } else if (isEmpty(password)) {
        return validationMessage(res, customException.emptyPassword())
    }
    next();
    return null;
}


/**
 * check validation for login.
 */
export const validateLogin = function (req: any, res: any, next: Function): null {
    let { email } = req.body;
    const { password } = req.body;
    email = req.body.email = toLower(email);
    if (isEmpty(email)) {
        return validationMessage(res, customException.emptyEmail())
    } else if (!isValidEmail(email)) {
        return validationMessage(res, customException.invalidEmail())
    } else if (isEmpty(password)) {
        return validationMessage(res, customException.emptyPassword())
    }
    next();
    return null;
};
