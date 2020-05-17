import userService from './userService';
import userMapper from './userMapper';
import customException from '../../customException';
import { comparePasswrod } from '../../utility';

export default {
    /**
     * function for creartig user in db.
     * @param params email, password
     */
    signUp: function (params: { email: string; password: string; name: string }): any {
        return userService.signUp(params).then((user: any) => {
            return userMapper.signupMapping({ userId: user._id, user: user });
        }).catch(function (err: any) {
            if (err.name == 'MongoError' && err.code === 11000) {
                throw customException.duplicateCredential(err);
            }
            throw err;
        })
    },

    /**
     * function for checking user credentials
     * @param {*} params email, password, phoneNumber
     */
    login: function (params: { email: string; password: string }): any {
        return userService.isEmailExist(params.email).then(async (result: any) => {
            if (result) {
                const isMatch = await comparePasswrod(params.password, result.password);
                if (isMatch) {
                    return userMapper.loginMapping(result)
                } else {
                    throw customException.passwordIncorrect();
                }
            } else {
                throw customException.accountNotExist();
            }
        })
    }
}
