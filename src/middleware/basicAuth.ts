import auth from 'basic-auth'; //@tslint:disabled
import { cfg } from '../config';
import constants from '../constant';


export default function (request: any, response: any, next: Function): null {
    if (request.method == 'OPTIONS') {
        response.status(200).end();
    }
    const credentials = auth(request);
    if (!credentials || credentials.name !== cfg.basicAuth.name || credentials.pass !== cfg.basicAuth.pass) {
        response.statusCode = 401
        response.send({ message: constants.MESSAGES.ACCESS_DENIED })
    } else {
        next();
    }
    return null;
}