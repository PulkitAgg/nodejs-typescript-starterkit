import userRouter from '../modules/user/userRoute';

export default function (app: any): null {
    app.use('/node-sample/api/v1/user', userRouter);
    return null;
}
