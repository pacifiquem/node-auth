const mongoose = require("mongoose");
require("dotenv").config({path: "./.env"});

const dbConnection = () => {
	const conn = mongoose.connect(process.env.MONGO_URL, () => {
		console.log("Db connected......................");
	});

	if (!conn) {
		console.log("database connection interupted");
		process.exit(1);
	}
};

module.exports = dbConnection;
