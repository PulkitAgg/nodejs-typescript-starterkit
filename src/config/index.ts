export { default as dbConfig } from './dbConfig';
export { default as expressConfig } from './expressConfig';

type cfgType = {
        debug: boolean;
        jwtSecretKey: string;
        JwtExpireTime: string;
        mongo: {
                dbName?: string;
                dbUrl?: string;
                options?: {
                        user?: string;
                        pass?: string;
                        useNewUrlParser: boolean;
                        useUnifiedTopology: boolean;
                        useCreateIndex: boolean;
                };
        };

        basicAuth: {
                name?: string;
                pass?: string;
        };
}

export const cfg: cfgType = {
        debug: !!process.env.DEBUG,
        jwtSecretKey: process.env.JWT_SECRET_KEY!,
        JwtExpireTime: process.env.JWT_EXPIRETIME!,
        mongo: {
                dbName: process.env.DB_NAME,
                dbUrl: process.env.DB_URL,
                options: {
                        user: process.env.DB_USER,
                        pass: process.env.DB_PASS,
                        useNewUrlParser: true,
                        useUnifiedTopology: true,
                        useCreateIndex: true
                }
        },

        basicAuth: {
                name: process.env.BASIC_AUTH_USERNAME,
                pass: process.env.BASIC_AUTH_PASS
        },

}