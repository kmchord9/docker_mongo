var model = require('./models');
var Sake = model.Sake;
var SakeType = model.SakeType;
var Temperature = model.Temperature;

var kuheiji = new Sake({
  brand: '$BBy$7(B',
  type: 9,
  impressions: [
    { temperature: 7, impression: '$B$&$^(B' },
    { temperature: 7, impression: '$B$a$A$c$&$^(B' }
  ]
});


kuheiji.save(function(err) {
  if (err) throw err;


});
