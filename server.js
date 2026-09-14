const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, "../frontend")));
// Test route
app.get("/", (req, res) => {
    res.send("BusBook Backend is Running!");
});

// Register API
app.post("/api/register", (req, res) => {

    const { name, email, password } = req.body;

    if (!name || !email || !password) {
        return res.status(400).json({
            message: "Please fill all fields"
        });
    }

    console.log("New User Registered:");
    console.log("Name:", name);
    console.log("Email:", email);

    res.json({
        message: "Registration successful!",
        user: {
            name: name,
            email: email
        }
    });
});
// Login API
app.post("/api/login", (req, res) => {

    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({
            message: "Please enter email and password"
        });
    }

    console.log("Login Attempt:");
    console.log("Email:", email);

    res.json({
        message: "Login successful!"
    });
});
// Admin Login API

app.post("/api/admin/login", (req, res) => {

    const { email, password } = req.body;

    if (!email || !password) {

        return res.status(400).json({
            message: "Please enter admin email and password"
        });

    }

    if (
        email === "admin@busbook.com" &&
        password === "admin123"
    ) {

        return res.json({
            message: "Admin login successful!"
        });

    }

    res.status(401).json({
        message: "Invalid admin email or password"
    });

});
app.listen(3000, () => {
    console.log("BusBook Backend running on http://localhost:3000");
});