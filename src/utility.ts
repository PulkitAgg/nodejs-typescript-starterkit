import bcrypt from 'bcrypt';
import global from './global';

export const validationMessage = function (res: any, error: any): any {
    return res.status(200).json({
        customStatus: 0,
        error: error
    });
}

export const isValidEmail = (email: string): boolean => {
    const emailPattern = global.regex.email;
    return new RegExp(emailPattern).test(email);
}


/**
 * encrypt the password using 10 saltRound.
 * @param {*} params password
 */
export const encryptionPassword = (password: string): Promise<string> => {
    return bcrypt.hash(password, 10)
}


/**
 * compare the plain text with db stored password.
 * @param {*} plainPassword password (plain text)
 * @param {*} encryptedPassword password (encrypted text)
 */
export const comparePasswrod = (plainPassword: string, encryptedPassword: string): Promise<boolean> => {
    return bcrypt.compare(plainPassword, encryptedPassword)
}