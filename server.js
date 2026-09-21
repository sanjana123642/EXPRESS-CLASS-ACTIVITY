const express = require("express");

const app = express();

app.use(express.json());

const PORT = 3000;

// GET Request
app.get("/", (req, res) => {
    res.send("Hello from Express Backend!");
});

// GET API
app.get("/users", (req, res) => {
    res.json([
        {
            id: 1,
            name: "Yashika"
        },
        {
            id: 2,
            name: "Rahul"
        }
    ]);
});

// POST API
app.post("/users", (req, res) => {
    const user = req.body;

    res.json({
        message: "User added successfully",
        user: user
    });
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});