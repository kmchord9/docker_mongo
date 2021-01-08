var mongoose = require('mongoose');
var Schema = mongoose.Schema

var options = {
  user: 'administrator',
  pass: 'release2',
  authSource: 'admin',
  useUnifiedTopology: true
};

var uri = 'mongodb://dockermongo_mongo_1:27017/sake';


var SakeType = new Schema({
  _id: Number,
  type: String
});

var Temperature = new Schema({
  _id: Number,
  temperature:String 
});

var Sake = new Schema({
  brand: String,
  type: { type: Number, ref: 'SakeType' },
  impression: [{
    temperature: { type: Number, ref: 'Temperature' },
    impression: String
  }]

});

mongoose.connect(uri, options);

exports.Temperature = mongoose.model('Temperature', Temperature);
exports.SakeType = mongoose.model('SakeType', SakeType);
exports.Sake = mongoose.model('Sake', Sake);
