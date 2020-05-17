import bodyParser from 'body-parser';

export default function (app: any): null {
    // parses application/json bodies
    app.use(bodyParser.json());
    // parses application/x-www-form-urlencoded bodies
    // use queryString lib to parse urlencoded bodies
    app.use(bodyParser.urlencoded({ extended: false }));

    app.use(function (request: any, response: any, next: Function) {
        response.header("Access-Control-Allow-Origin", "*");
        response.header('Access-Control-Allow-Credentials', true);
        response.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, authorization, accessToken");
        response.setHeader('Access-Control-Allow-Methods', 'POST, GET, PUT, DELETE, OPTIONS');
        next();
    });

    return null;
}
