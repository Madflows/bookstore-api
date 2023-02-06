const express = require("express");
const dotenv = require("dotenv").config();

const bookRoutes = require("./routes/bookRoutes");

const PORT = process.env.PORT;
const app = express();

app.use(express.json())


app.use("/api/books", bookRoutes);

app.listen(PORT, () => {
  console.log(`App started on port ${PORT}`);
});
