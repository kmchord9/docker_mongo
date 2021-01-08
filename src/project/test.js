var mongoose = require('mongoose');

var options = {
  user: 'usertemp',
  pass: 'usertemp',
  useUnifiedTopology: true
};

var uri = 'mongodb://docker_mongo_mongo_1:27017/temp';

mongoose.connect(uri, options);

const yourSchema = new mongoose.Schema({ name: 'String', size: 'String' });
const Tank = mongoose.model('Tank', yourSchema); 

const small = new Tank({name: 'Yasu2', size: 'large2'});

small.save(err => {
  if (err) console.error(err)
  console.log('saved')
  mongoose.disconnect();
});
