// import required module
const express = require("express");
const app = express();

// Set EJS as the view engine
app.set('view engine', 'ejs');

// Define a route that renders an EJS template
app.get('/', (req,res) => {
    // Data to pass to the template (replace with your own data)
    const data = {
        title: 'Hello, EJS !',
        message: 'This is an example of EJS templating rendering'
    };

    // Render the EJS template and pass data to it
    res.render('page' , data);
});

// Start the server on port 3000
const port = 3000;
app.listen(port , () => {
    console.log(`Server has been run on port ${port}`);
});