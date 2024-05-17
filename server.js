const express = require("express");
const bodyParser = require("body-parser");
const booksRouter = require("./routes/books");

const app = express();
const PORT = 3000;

// Middleware
app.use(bodyParser.json());

// Root route
app.get("/", (req, res) => {
  res.send("Welcome to the Book API!");
});

// Books routes
app.use("/books", booksRouter);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
