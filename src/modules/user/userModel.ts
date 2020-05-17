import mongoose from 'mongoose';
import Constants from '../../constant';

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name: { type: String, default: '' },
    email: { type: String, default: '', unique: true },
    password: { type: String, default: '' },
}, {
    timestamps: true,
    collection: Constants.DB_MODEL_REF.USER
});


export default mongoose.model(Constants.DB_MODEL_REF.USER, UserSchema);
