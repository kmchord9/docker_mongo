var mongoose = require("mongoose");
var Schema = mongoose.Schema;
/*
var options = {
	user: 'usertemp',
	pass: 'usertemp',
	userUnifiedTopology: true

};

var uri = 'mongodb://dockermongo_mongo_1:27017/temp';

mongoose.connect(uri. options);
*/

var TaskSchema = new Schema({
  name: {
	  type: String,
		required: "Enter the name of the task"
	
	},
	Created_date: {
	  type: Date,
		default: Date.now
	}

});

module.exports = mongoose.model("Tasks", TaskSchema);
