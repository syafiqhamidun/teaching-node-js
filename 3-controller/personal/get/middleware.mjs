// import express from "express"

// const app = express()
// const port = 3000;

// // req, res
// const controller = (req,res) => {
//     res.setHeader("content-type" , "text/html");

//     res.send(
//         `<!DOCTYPE html><html><head><title><Hello title></title></head><body><h1>Hello World !</h1></body></html>`
//     );
// };

// const middleware = (req, res, next) => {
//     if (req.params.user === "syafiq"){
//        // important
//         next();
//     } else {
//         res.send (
//             `<!DOCTYPE html><html><head><title><Hello title></title></head><body><h1>You are not allowed</h1></body></html>`
//         );
//     };
    
// };

// app.get ('/:user', middleware , controller);

// app.listen (port, () => {
//     console.log (`server is now running on port ${port}`);
// });


import express from 'express'

const app = express()
const port = 3000;

const controller = (req,res) => {
    res.setHeader ("content-type" , "text/html");

    res.send (
        `<!DOCTYPE html><html><head><title><Hello title></title></head><body><h1>Hello World !</h1></body></html>`
    );
};

const middleware = (req ,res, next) => {
    if (req.params.user === "syafiq"){
        next();
    } else {
        res.send (
            `<!DOCTYPE html><html><head><title><Hello title></title></head><body><h1>You are now Allowed</h1></body></html>`
        );
    };
};


app.get('/:user',middleware,controller);

app.listen (port, () => {
    console.log(`Server is now running on port ${port}`);
});