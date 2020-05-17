import constants from './userConstants';
import { generateToken } from '../../middleware/authenticate';

// const authenticationService = require('../../middleware/authenticate');


export default {
    signupMapping: function signupMapping(params: any): { message: string; accessToken: string } {
        const token = generateToken(params.user);
        const respObj = {
            message: constants.USER_CREATE,
            accessToken: token
        }
        return respObj;
    }
}


// function loginMapping(params) {
//     const token = authenticationService.generateToken(params);
//     const respObj = {
//         message: constants.MESSAGES.USER_LOGIN,
//         accessToken: token,
//         userProfile: getProfileData(params)
//     }
//     return respObj;
// }

// function forgotMapping(params) {
//     const token = authenticationService.generateToken(params);
//     const respObj = {
//         message: constants.MESSAGES.OTP_SENT,
//         accessToken: token,
//     }
//     return respObj;
// }

// function resetPassword(params) {
//     const token = authenticationService.generateToken(params.user);
//     const respObj = {
//         message: constants.MESSAGES.PASSWORD_RESET,
//         accessToken: token,
//         userProfile: getProfileData(params.user)
//     }
//     return respObj;
// }

// function uploadImage(data) {
//     const respObj = {
//         message: constants.MESSAGES.IMAGE_UPLOAD_SUCCESS,
//         data
//     }
//     return respObj;
// }

// function prfileMapping(data = {}) {
//     const respObj = {
//         message: constants.MESSAGES.PROFILE_DATA_SUCCESS,
//         userProfile: getProfileData(data)
//     }
//     return respObj;
// }

// function updatePrfileMapping(data = {}) {
//     const respObj = {
//         message: constants.MESSAGES.UPDATE_PROFILE_SUCCESS,
//         userProfile: getProfileData(data)
//     }
//     return respObj;
// }

// function userListMapping(userList = [], pageInfo = {}) {
//     const respObj = {
//         message: constants.MESSAGES.USER_LIST,
//         data: userList,
//         pageInfo
//     }
//     return respObj;
// }

// function changePassword() {
//     const respObj = {
//         message: constants.MESSAGES.CHANGE_PASSWORD,
//         data: {}
//     }
//     return respObj;
// }

// module.exports = {
//     signupMapping,
//     loginMapping,
//     forgotMapping,
//     resetPassword,
//     uploadImage,
//     prfileMapping,
//     updatePrfileMapping,
//     userListMapping,
//     changePassword,
// }