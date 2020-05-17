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
    }
}


// /**
//  * function for checking user credentials
//  * @param {*} params email, password, phoneNumber
//  */
// function login(params) {
//     let prmoise = [];
//     if (params.email) {
//         prmoise.push(userService.isEmailExist(params.email));
//     } else if (params.phoneNumber) {
//         prmoise.push(userService.isPhoneExist(params.phoneNumber));
//     }
//     return Promise.all(prmoise).then(async result => {
//         if (result && result.length && result[0]) {
//             const isMatch = await appUtlis.comparePasswrod(params.password, result[0].password);
//             if (isMatch) {
//                 return userMapper.loginMapping(result[0])
//             } else {
//                 throw customException.passwordIncorrect();
//             }
//         } else {
//             if (params.phoneNumber) {
//                 throw customException.mobileNotExist();
//             } else {
//                 throw customException.accountNotExist();
//             }
//         }
//     })
// }