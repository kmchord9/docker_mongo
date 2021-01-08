var mongoose = require('mongoose');

var options = {
  user: 'usertemp',
  pass: 'usertemp',
  useUnifiedTopology: true
};

var uri = 'mongodb://docker_mongo_mongo_1:27017/temp';

mongoose.connect(uri, options);


const TempDataSchema = new mongoose.Schema({
  addtime: Date,
  tempdata: Number
});
const SomeModel = mongoose.model('SomeModel', TempDataSchema );

const small = new SomeModel({addtime: new Date(), tempdata: Math.random()});

small.save(err => {
  if (err) console.error(err)
  console.log('saved')
  mongoose.disconnect();
});
