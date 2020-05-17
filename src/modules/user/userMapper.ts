import constants from './userConstants';
import { generateToken } from '../../middleware/authenticate';

export default {
    signupMapping: function (params: any): { message: string; accessToken: string } {
        const token = generateToken(params.user);
        const respObj = {
            message: constants.USER_CREATE,
            accessToken: token
        }
        return respObj;
    },

    loginMapping: function (params: any): { message: string; accessToken: string; userProfile: any } {
        const token = generateToken(params);
        const respObj = {
            message: constants.USER_LOGIN,
            accessToken: token,
            userProfile: {
                name: params.name,
                email: params.email,
                _id: params._id,
            }
        }
        return respObj;
    }
}