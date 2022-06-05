
const express = require("express");
const swaggerJsdoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

//creating an axpress app
const app = express();
const bodyParser = require("body-parser");

const usersRoutes = require("./routes/users.route");
const postRoutes = require("./routes/posts.route");


app.use("/users", usersRoutes);
app.use("/posts", postRoutes);

app.use(bodyParser.json());

/** Swagger Initialization - START */
//create configuration
const swaggerOption = {
    swaggerDefinition: (swaggerJsdoc.Options = {
      info: {
        title: "my-posts",
        description: "API documentation",
        contact: {
          name: "Developer",
        },
        servers: ["http://localhost:3000/"],
      },
    }),
    apis: ["index.js", "./routes/*.js"],
  };
  //Give configuration to swagger documentation
  const swaggerDocs = swaggerJsdoc(swaggerOption);

  //hosting 
  app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));
  /** Swagger Initialization - END */


//listen on port 3000
app.listen(3000, () => {
    console.log(" I am ready to listen you")
});






