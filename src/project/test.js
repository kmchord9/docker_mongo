var mongoose = require('mongoose');

var options = {
  user: 'testuser',
  pass: 'testuser',
  useUnifiedTopology: true
};

var uri = 'mongodb://dockermongo_mongo_1:27017/test';

mongoose.connect(uri, options);

// $B:G=i$N%b%G%k(B
const yourSchema = new mongoose.Schema({ name: 'String', size: 'String' });
const Tank = mongoose.model('Tank', yourSchema); // default $B@\B3(B  tanks

// $B=qN`$N:n@.(B
const small = new Tank({name: 'Yasu2', size: 'large2'});

small.save(err => {
  if (err) console.error(err)
  console.log('saved')
  mongoose.disconnect();
});
