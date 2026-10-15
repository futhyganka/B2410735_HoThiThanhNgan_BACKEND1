const express = require("express");
const cors = require("cors");

const app = express();

const contactsRouter = require("./app/routes/contact.route");
const ApiError = require("./app/api-error");

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.json({ message: "Welcome to contact book application." });
});

app.use("/api/contacts", contactsRouter);

// Handle 404
app.use((req, res, next) => {
    // Code ở đây sẽ chạy khi không route
    // khớp với yc, gọi next()
    return next(new ApiError(404, "Resource not found"));
})

// Define error-handing middleware
app.use((err, req, res, next) => {
    // Middleware xử lý lỗi tập trung
    // Trong các đoạn code xử lý route, gọi next(error) -> middleware
    return res.status(error.statusCode || 500).json({
        message: error.message || "Internal Server Error",
    })
})

module.exports = app;

