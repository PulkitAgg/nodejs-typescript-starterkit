import express from 'express';
import { validateSignUp, validateLogin } from './userValidators';
import userFacade from './userFacade';
import { sendSuccess, sendError } from '../../responseHandler';

const userRouter = express.Router();

/**
* route for creating new user.
*/
userRouter.route("/signup")
    .post([validateSignUp], function (req: any, res: any) {
        const { email, password, name } = req.body;
        userFacade.signUp({
            email,
            password,
            name
        }).then(function (result: any) {
            sendSuccess(res, result);
        }).catch(function (err: Error) {
            sendError(res, err);
        })
    });

/**
 * route for user login
 */
userRouter.route('/login')
    .post([validateLogin], function (req: any, res: any) {
        const { email, password } = req.body;
        userFacade.login({
            email, password
        }).then(function (result: any) {
            sendSuccess(res, result);
        }).catch(function (err: any) {
            sendError(res, err);
        })
    })

export default userRouter;