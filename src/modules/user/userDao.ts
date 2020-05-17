import User from './userModel';

export default {
    /**
     * function for creartig user in db.
     * @param params email, password, firstName, lastName, phoneNumber, city, state, avtar, userType, locale
     */
    signUp: async function (params: { email: string; password: string; name: string }): Promise<object> {
        return User.create(params)
    }
}


// /**
//  * function for checking the email exist or not.
//  * @param {*} email 
//  */
// function isEmailExist(email) {
//     return User.findOne({ email });
// }

// /**
//  * function for checking the phoneNumber exist or not.
//  * @param {*} phoneNumber
//  */
// function isPhoneExist(phoneNumber) {
//     return User.findOne({ phoneNumber });
// }

// /**
//  * function for setting the otp to userId.
//  * @param {*} userId 
//  * @param {*} otp 
//  */
// function setOTP(userId, otp) {
//     return User.findOneAndUpdate({ _id: appUtils.convertToObjectIds(userId) }, { $set: { otp: otp } }, { new: true })
// }

// /**
//  * function for getting user details from user id.
//  * @param {*} userId 
//  */
// function findUserByID(userId) {
//     return User.findById(appUtils.convertToObjectIds(userId));
// }

// /**
//  * function for getting user count.
//  */
// function userCount() {
//     return User.countDocuments({ isActive: true });
// }

// /**
//  * funciton for updating user profile
//  * @param {*} params userId, email, firstName, lastName, phoneNumber, city, state, avtar
//  */
// function updateProfile(params) {
//     const { userId, ...updatedObj } = params;
//     return User.findByIdAndUpdate(appUtils.convertToObjectIds(userId), {
//         $set: updatedObj
//     }, {
//         new: true
//     })
// }

// /**
//  * function for getting user list.
//  */
// function userList(params) {
//     const { pageNo, pageSize } = params;
//     return User.find({}).sort({ _id: -1 }).skip(pageNo * pageSize).limit(pageSize).select('-password');
// }

// /**
//  * function for change password.
//  * @param {*} params userId, password
//  */
// function changePassword(params) {
//     return User.findByIdAndUpdate(appUtils.convertToObjectIds(params.userId), { $set: { password: params.password } })
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