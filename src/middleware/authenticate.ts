import jwt from 'jsonwebtoken';
import customException from '../customException';
import { cfg } from '../config';



export const generateToken = (params: any): string => {
    const token = jwt.sign({
        id: params._id,
        name: params.name
    }, cfg.jwtSecretKey, {
        expiresIn: cfg.JwtExpireTime
    })
    return token;
}

export const checkToken = (req: any, res: any, next: Function): null => {
    jwt.verify(req.headers.authtoken, cfg.jwtSecretKey, function (err: any, decoded: any) {
        if (err) {
            return res.status(200).json({
                lawTechStatus: 0,
                error: customException.invalidToken(err)
            });
        }
        else {
            req.userId = decoded.id;
            req.userType = decoded.userType;
            req.firstName = decoded.firstName;
            next();
        }
    })
    return null;
}



// export const generateToken = (params) => {
//     const token = jwt.sign({
//         id: params._id,
//         name: params.name
//     }, cfg.jwtSecretKey, {
//         expiresIn: cfg.JwtExpireTime
//     })
//     return token;
// }

// export const checkToken = (req, res, next) => {
//     jwt.verify(req.headers.authtoken, cfg.jwtSecretKey, function (err, decoded) {
//         if (err) {
//             return res.status(200).json({
//                 lawTechStatus: 0,
//                 error: customException.invalidToken(err)
//             });
//         }
//         else {
//             req.userId = decoded.id;
//             req.userType = decoded.userType;
//             req.firstName = decoded.firstName;
//             next();
//         }
//     })
//     return null;
// }