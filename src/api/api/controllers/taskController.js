var mongoose = require("mongoose");

var Task = mongoose.model("Tasks");

// $BA4$F$N%?%9%/$r<hF@$9$k(B
exports.all_tasks = function(req, res) {
  Task.find({}, function(err, task) {
		if (err) res.send(err);
		res.json(task);
	});
};

// $B?7$7$$%?%9%/$r:n@.$9$k(B

exports.create_task = function(req, res) {
  var new_task = new Task(req.body);
  new_task.save(function(err, task) {
		if (err) res.send(err);
		res.json(task);
	});
};

//$BFCDj$N%?%9%/$r<hF@$9$k(B

exports.load_task = function(req, res) {
  Task.findById(req.params.taskId, function(err, task) {
		if (err) res.send(err);
		res.json(task);
	});
};

//$BFCDj$N%?%9%/$r99?7$9$k(B

exports.update_task = function(req, res) {
  Task.findOneAndUpdate(
	  { _id: req.params.taskId },
		req.body,
		{ new: true },
		function(err, task) {
		  if (err) res.send(err);
			res.json(task);
		}
	
	);
};

//$BFCDj$N%?%9%/$r:o=|$9$k(B

exports.delete_task = function(req, res) {
	Task.remove(
		{
			_id: req.params.taskId
		},
		function(err, task){
			if (err) res.send(err);
			res.json({ message: "Task successfully deleted" });
		}
	);
};
