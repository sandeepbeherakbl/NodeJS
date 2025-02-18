const express = require("express");
const app = express();
const { connectMongoDb } = require("./connection");
const userRouter = require("./Routes/user");
const { logReqRes } = require("./middlewares");
const port = 8000;
app.use(express.json());

// Connection
connectMongoDb("mongodb://localhost:27017/user").then(() => {
  console.log("mongodb conected");
});

// Middlewares
app.use(express.urlencoded({ extended: true }));
app.use(logReqRes("log.txt"));

// routes
app.use("/user", userRouter);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
