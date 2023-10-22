const express = require ("express");
const app = express ();
const port = 3000;

// Middleware to parse JSON and URL-encoded form data
app.use (express.json());
app.use (express.urlencoded({extended: true}));

// Serve a basic HTML form for testing
app.get("/", (req,res) =>{
    res.send(`
    <form method="POST" action="/submit">
        <label for="name">Name:<name="/label>
        <input type="text" id="name" name="name">
        <br>
        <label for="email">Email:</label>
        <input type="text" id="email" name="email">
        <br>
        <input type="submit" value="submit">
    </form>
        `);
});


// POST route to handle form submission
app.post("/submit", (req,res) => {
    // Access form data from req.body
    const name = req.body.name;
    const email = req.body.email;

    res.send(`Receive data: Name - ${name}, Email - ${email}`);
});


app.listen(port, () => {
    console.log(`server is running on port ${port}`);
});