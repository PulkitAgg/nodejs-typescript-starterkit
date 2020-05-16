import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
const app = express();
const DEFAULT_PORT = 5000;
app.get('*', function (req: any, res: any) {
    res.send('hellow world');
})

// start server
app.listen(process.env.PORT || DEFAULT_PORT, () => {
    console.log(`Express server listening on ${process.env.PORT || DEFAULT_PORT} port`);
});