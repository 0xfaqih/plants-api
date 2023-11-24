const Hapi = require('@hapi/hapi');
const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '../.env') });

const routes = require('./routes');
const mongoose = require("mongoose");

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log("Database connected!");
  })
  .catch((e) => {
    console.error("Error connecting to the database:", e);
  });

const server = Hapi.server({
  port: process.env.PORT,
  host: process.env.HOST
});

server.route(routes);

server.start().then(() => {
  console.log(`Server running on ${server.info.uri}`);
}).catch((err) => {
  console.error("Error starting the server:", err);
});
