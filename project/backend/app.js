const express = require("express");

const app = express();
const dbconnect = require("./db");
dbconnect();

// router
const userRouter = require("./routes/userRoutes");

// endpoints
app.use("/api/user", userRouter);

const port = 3000;
const host = "localhost";

app.listen(port, () => {
  console.log(`Server is running on http://${host}:${port}`);
});
