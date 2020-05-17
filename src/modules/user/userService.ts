import userDao from './userDao';
import { encryptionPassword } from '../../utility';

export default {
    /**
     * function for creartig user in db.
     * @param params email, password
     */
    signUp: async function (params: { email: string; password: string; name: string }): Promise<object> {
        params.password = await encryptionPassword(params.password);
        return userDao.signUp(params)
    },

    /**
     * function for checking the email exist or not.
     * @param {*} email 
     */
    isEmailExist: function (email: string) {
        return userDao.isEmailExist(email);
    }
}