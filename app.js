const config = require("./utils/config");
const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const indexRouter = require("./routes/index");
const loginRouter = require("./routes/login");
const userRouter = require("./routes/user");
const testAPIRouter = require("./routes/testAPI");
const getMultiple = require("./routes/getMultiple");
const logger = require("./utils/logger");
const middleware = require("./utils/middleware");
const mongoose = require("mongoose");

logger.info("connecting to", config.MONGODB_URI);

mongoose
  .connect(config.MONGODB_URI, { useNewUrlParser: true })
  .then(() => {
    logger.info("connected to MongoDB");
  })
  .catch(error => {
    logger.error("error connection to MongoDB:", error.message);
  });

app.use(cors());
app.use(express.static("build"));
app.use(bodyParser.json());
app.use(middleware.requestLogger);

// let eBay = require("ebay-node-api");

// let ebay = new eBay({
//   clientID: "ChrisStu-cards-SBX-4a6d0a603-8c90f375",
//   // options  - optional HTTP request timeout to apply to all requests.
//   env: "SANDBOX" // optional default = 'PRODUCTION'
// });

// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));

app.use("/", indexRouter);
app.use("/login", loginRouter);
app.use("/user", userRouter);
app.use("/testAPI", testAPIRouter);
app.use("/getMultiple", getMultiple);

app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "/build", "index.html"));
});
// app.use("/mwBase", mwBase);

// error handler
app.use(middleware.unknownEndpoint);
app.use(middleware.errorHandler);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

module.exports = app;
