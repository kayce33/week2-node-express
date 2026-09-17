const express = require("express");
const path = require("path");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3000;

// Parse incoming JSON request bodies
app.use(express.json());

// Bonus: custom middleware to log requests
app.use((req, res, next) => {
    console.log(`${new Date().toISOString()} - ${req.method} ${req.url}`);
    next();
});

// Serve the static HTML page
app.use(express.static(path.join(__dirname, "public")));

// GET /
app.get("/", (req, res) => {
    res.send("My Week 2 API!");
});

// POST /user
app.post("/user", (req, res) => {
    const { name, email } = req.body;

    if (!name || !email) {
        return res.status(400).json({
            error: "Name and email are required"
        });
    }

    res.json({
        message: `Hello, ${name}!`
    });
});

// GET /user/:id
app.get("/user/:id", (req, res) => {
    const { id } = req.params;
    res.send(`User ${id} profile`);
});

// Error-handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);

    res.status(500).json({
        error: "Something went wrong"
    });
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
