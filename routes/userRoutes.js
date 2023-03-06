const express = require("express");

// Import middlewares
const {
	protect,
	filterUser} = require("../middleware/auth");

// Importing controllers
const {postingUser,
	getAllUsers,
	getUserById,
	updateUser,
	deleteUser,
	loginUser} = require("../controllers/userControllers");

// Initializing router
// eslint-disable-next-line new-cap
const router = express.Router();

router.route("/")
	.get(protect, getAllUsers)
	.post(postingUser);

router.route("/:id")
	.put(protect, updateUser)
	.delete([protect, filterUser("ADMIN")], deleteUser)
	.get(getUserById);

router.route("/login")
	.post(loginUser);

// Exporting router
module.exports.userRoutes = router;

