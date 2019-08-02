const User = require("../models/user");

var func = {};

func.sendUserData = function(userId, res) {
	User.findById(
		userId,
		"email name username _id biography headline links loaded photo",
		function(err, user) {
			res.json({ user });
		}
	);
};

func.isNum = function(value) {
	if (typeof value === "number") {
		return true;
	} else {
		return false;
	}
};

module.exports = func;
