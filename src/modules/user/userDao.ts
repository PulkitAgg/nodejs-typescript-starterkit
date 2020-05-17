import User from './userModel';

export default {
    /**
     * function for creartig user in db.
     * @param params email, password, firstName, lastName, phoneNumber, city, state, avtar, userType, locale
     */
    signUp: function (params: { email: string; password: string; name: string }): Promise<object> {
        return User.create(params)
    },

    /**
     * function for checking the email exist or not.
     * @param {*} email 
     */
    isEmailExist: function (email: string) {
        return User.findOne({ email });
    }
}