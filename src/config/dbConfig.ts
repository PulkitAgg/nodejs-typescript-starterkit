import mongoose from 'mongoose';

// Connect to Db
export default function connectDb(env: any, callback: Function): null {
    const dbName: string = env.mongo.dbName;
    let dbUrl: string = env.mongo.dbUrl;
    const dbOptions: object = env.mongo.options;
    if (env.debug) {
        dbUrl = dbUrl + dbName;
        mongoose.set('debug', true);
    } else {
        dbUrl = dbUrl + dbName;
    }

    mongoose.connect(dbUrl, dbOptions).then(function () {
        console.log("connected to database", dbUrl);
    }).catch((err: Error) => {
        console.log('error in connecting to db', err)
    })


    // CONNECTION EVENTS
    // When successfully connected
    mongoose.connection.on('connected', function () {
        callback();
    });

    // If the connection throws an error
    mongoose.connection.on('error', function (error: Error) {
        callback(error);
    });

    // When the connection is disconnected
    mongoose.connection.on('disconnected', function () {
        callback("DB connection disconnected.");
    });

    return null;
}
