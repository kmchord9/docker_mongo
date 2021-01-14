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

function sleep(second) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve()
        }, second * 1000)
    })
}


function modelSave() {
  return new Promise(resolve => {
    setTimeout(() => {
		  const SomeModel = mongoose.model('SomeModel', TempDataSchema );
		  const small = new SomeModel({addtime: new Date(), tempdata: Math.random()});
			small.save().then(err => {
				if(err) console.error(err);
				resolve();
      });
    },2000)
  })
};

(async () => {
	for (let i=0; i<5; i++) {
		await modelSave().then( resolve =>{ console.log("finish")	});
		await sleep(1);
		console.log("done")
  }
  
  mongoose.disconnect();
  console.log("disconnected");
})();

