var model = require('./models');
var Sake = model.Sake;
var SakeType = model.SakeType;
var Temperature = model.Temperature;

var kuheiji = new Sake({
  brand: '濁し',
  type: 9,
  impressions: [
    { temperature: 7, impression: 'うま' },
    { temperature: 7, impression: 'めちゃうま' }
  ]
});


kuheiji.save(function(err) {
  if (err) throw err;


});
