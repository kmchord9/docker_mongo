var mongoose = require('mongoose');

var options = {
  user: 'usertemp',
  pass: 'usertemp',
  useUnifiedTopology: true
};

var uri = 'mongodb://dockermongo_mongo_1:27017/temp';

mongoose.connect(uri, options);


const TempDataSchema = new mongoose.Schema({
  addtime: Date,
  tempdata: Number
});
const SomeModel = mongoose.model('SomeModel', TempDataSchema );

//var id = setInterval(function () {
	
	const small = new SomeModel({addtime: new Date(), tempdata: Math.random()});
/*	
	small.save(err => {
	if (err) console.error(err)
	console.log('saved')
	});
	
	console.log('inloop');
},8000);
*/


small.save(err => {
  if (err) console.error(err)
  console.log('saved')
  mongoose.disconnect();
});

