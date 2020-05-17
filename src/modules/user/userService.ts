import userDao from './userDao';
import { encryptionPassword } from '../../utility';

// const userDao = require('./userDao');
// const bcrypt = require('bcrypt');
// const appUtlis = require('../../appUtils');

export default {
    /**
     * function for creartig user in db.
     * @param params email, password
     */
    signUp: async function (params: { email: string; password: string; name: string }): Promise<object> {
        params.password = await encryptionPassword(params.password);
        return userDao.signUp(params)
    }
}


// /**
//  * function for checking the email exist or not.
//  * @param {*} email 
//  */
// function isEmailExist(email) {
//     return userDao.isEmailExist(email);
// }

// /**
//  * function for checking the phoneNumber exist or not.
//  * @param {*} phoneNumber
//  */
// function isPhoneExist(phoneNumber) {
//     return userDao.isPhoneExist(phoneNumber);
// }


// /**
//  * function for setting the otp to userId.
//  * @param {*} userId 
//  * @param {*} otp 
//  */
// function setOTP(userId, otp) {
//     return userDao.setOTP(userId, otp)
// }

// /**
//  * function for getting user details from user id.
//  * @param {*} userId 
//  */
// function findUserByID(userId) {
//     return userDao.findUserByID(userId);
// }

// /**
//  * function for getting user count.
//  */
// function userCount() {
//     return userDao.userCount();
// }

// /**
//  * funciton for updating user profile
//  * @param {*} params userId, email, firstName, lastName, phoneNumber, city, state, avtar
//  */
// function updateProfile(params) {
//     return userDao.updateProfile(params);
// }

// /**
//  * function for getting user list.
//  */
// function userList(params) {
//     return userDao.userList(params);
// }

// /**
//  * function for change password.
//  * @param {*} params userId, password
//  */
// function changePassword(params) {
//     return userDao.changePassword(params);
// }

// module.exports = {
//     signUp,
//     isEmailExist,
//     isPhoneExist,
//     setOTP,
//     findUserByID,
//     userCount,
//     updateProfile,
//     userList,
//     changePassword,
// }