const express = require("express");
const dotenv = require("dotenv").config();
const colors = require("colors");

const bookRoutes = require("./routes/bookRoutes");
const connectDB = require("./config/db");

const PORT = process.env.PORT;
const { errorHandler } = require("./middleware/errorMiddleware");

connectDB();
const app = express();

app.use(express.json());
app.use(
  express.urlencoded({
    extended: false,
  })
);

app.use("/api/books", bookRoutes);

app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`App started on port ${PORT}`);
});
