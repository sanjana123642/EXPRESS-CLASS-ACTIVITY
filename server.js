const express = require("express");

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// GET request
app.get("/", (req, res) => {
    res.send(`
        <h1>Express Class Activity</h1>

        <h2>GET Request</h2>
        <p>This page is rendered using Express.</p>

        <h2>POST Request</h2>

        <form action="/submit" method="POST">
            <input type="text" name="name" placeholder="Enter your name">
            <button type="submit">Submit</button>
        </form>
    `);
});

// POST request
app.post("/submit", (req, res) => {
    const name = req.body.name;

    res.send(`
        <h1>POST Request Successful</h1>
        <p>Hello ${name}!</p>
        <a href="/">Go Back</a>
    `);
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});