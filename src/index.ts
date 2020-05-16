import express from 'express';
const app = express();

app.get('*', function (req: any, res: any) {
    res.send('hellow world');
})

// start server
app.listen(3000, () => {
    console.log(`Express server listening on 3000`);
});