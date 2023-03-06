const express = require("express");
const bodyParser = require("body-parser");
require("dotenv").config({path: "./config/.env"});
const app = express();
const dbConnection = require("./config/db_connection");

// Requiring user routes
const {userRoutes} = require("./routes/userRoutes");

// Swagger conf
const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("./swagger.json");

// Running db connection function
dbConnection();

// Used middlewares
app.use(bodyParser.json());
app.use(
	"/api-docs",
	swaggerUi.serve,
	swaggerUi.setup(swaggerDocument),
);
app.use("/user", userRoutes);

// CRUD
// C: create httpMethod: post,
// R: read httpMethod: get,
// U: update httpMethod: put,
// D: delete httpMethod: delete,

console.log(process.env.PORT);
app.get("/", (req, res) => res.send("welcome to brainiacs"));

app.listen(process.env.PORT, () => {
	console.log("Runining...........");
});
