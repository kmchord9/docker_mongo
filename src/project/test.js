var mongoose = require('mongoose');

var options = {
  user: 'testuser',
  pass: 'testuser',
  useUnifiedTopology: true
};

var uri = 'mongodb://dockermongo_mongo_1:27017/test';

mongoose.connect(uri, options);

// 最初のモデル
const yourSchema = new mongoose.Schema({ name: 'String', size: 'String' });
const Tank = mongoose.model('Tank', yourSchema); // default 接続  tanks

// 書類の作成
const small = new Tank({name: 'Yasu2', size: 'large2'});

small.save(err => {
  if (err) console.error(err)
  console.log('saved')
  mongoose.disconnect();
});
