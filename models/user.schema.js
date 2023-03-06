const mongoose = require("mongoose");

// Defining user schema
const userSchema = new mongoose.Schema({
	fname: {
		type: String,
		min: 2,
		max: 30,
	},
	type: {
		type: String,
		enum: ["ADMIN", "USANZWE"],
		default: "USANZWE",
	},
	lname: {
		type: String,
		min: 2,
		max: 30,
	},
	password: {
		type: String,
		min: 2,
		max: 30,
	},
});

module.exports.usersSchema = mongoose.model("users", userSchema);
