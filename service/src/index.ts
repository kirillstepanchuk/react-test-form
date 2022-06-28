const express = require("express");
const cors = require("cors");

const { APP_PORT, CLIENT_URL } = require("./config");
const router = require("./routes/index");

const app = express();

app.use(
  cors({
    origin: CLIENT_URL,
    preflightContinue: true,
    optionsSuccessStatus: 200,
    credentials: true,
    methods: "GET,PUT,PATCH,POST,DELETE",
  })
);

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.raw());

app.use(router);

const startServer = async () => {
  try {
    app.listen(APP_PORT, () => {
      console.info(`server started on port ${APP_PORT}!`);
    });
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.log(`the ${error} happend with server`);
      console.log(`it means ${error.message}`);
    }
  }
};

startServer();
