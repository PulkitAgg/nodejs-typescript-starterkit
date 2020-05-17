import userRouter from '../modules/user/userRoute';
import basicAuthentication from '../middleware/basicAuth';

export default function (app: any): null {
    app.use('/node-sample/api/', basicAuthentication);
    app.use('/node-sample/api/v1/user', userRouter);
    return null;
}
