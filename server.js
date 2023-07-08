// imports
const express = require("express");
const { router } = require("./routes/router");
const swaggerUi = require("swagger-ui-express");
const swaggerJsdoc = require("swagger-jsdoc");

// server
const server = express();

// data
const port = 5000;

// swagger options
const swagger_options = {
  definition: {
    openapi: "3.0.1",
    info: {
      title: "Express api docs with swagger",
    },

    servers: [
      {
        url: "http://localhost:5000/",
      },
    ],
  },
  apis: ["./services/*js"],
};
const spaces = swaggerJsdoc(swagger_options);

// use server
server.use(express.json());
server.use("/api/docs/", swaggerUi.serve, swaggerUi.setup(spaces));

// forward to router
server.use("/", router);

// listen server
server.listen(port, () => console.log("Server is running on port " + port));
