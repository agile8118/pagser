const mongoose = require("mongoose");
const Schema = mongoose.Schema;

var trashSchema = new Schema(
	{
		author: {
			type: mongoose.Schema.Types.ObjectId,
			ref: "User"
		}
	},
	{ strict: false }
);
var Trash = mongoose.model("Trash", trashSchema, "trash");

module.exports = { Trash };
