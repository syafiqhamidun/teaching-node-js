const express = require ("express");
const app = express();
const port = 3000;

// // Define a function to handle the "/hello" route
// function helloWorldController(req,res) {
//     // Set the content type to html
//     res.setHeader ('Content-type', 'text/html');

//     // Send the html response
//     res.send (
//         "<!DOCTYPE html><html><head><title><Hello title></title></head><body><h1>Hello World !</h1></body></html>"
//     );
// }

// // Define a route for "/hello" path and associate it with the controller
// app.get ("/user/:username", helloWorldController);

app.get("/user/admin" , (req,res) => {
    
    res.setHeader ("content-type" , "text/html");

    res.send (
        `<!DOCTYPE html><html><head><title><Hello title></title></head><body><h1>Welcome admin</h1></body></html>`
    );
});


app.get("/user/:username" , (req,res) => {
    const username = req.params.username;

    res.setHeader ("content-type" , "text/html");
        
    res.send(
        `<!DOCTYPE html><html><head><title><Hello title></title></head><body><h1>Hello ${username}</h1></body></html>`
    );
});

app.use((req,res) => {
    res.setHeader ("content-type" , "text/html");
        
    res.send(
        `<!DOCTYPE html><html><head><title><Hello title></title></head><body><h1>404 error not found</h1></body></html>`
    );
})






// Start the server
app.listen(port, () => {
    console.log(`server is running on port ${port}`);
});