require("dotenv").config({
  path: process.env.NODE_ENV === "production" ? ".env.prod" : ".env.dev",
});

const app = require("./app");

app.listen(process.env.PORT, () => {
  console.log(`Running on ${process.env.PORT}`);
});
