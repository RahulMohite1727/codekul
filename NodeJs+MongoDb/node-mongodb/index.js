
var mongodb = require('mongodb');
var mongoClient = mongodb.MongoClient;

var url = 'mongodb://localhost:27017/RahulMongoDb';
mongoClient.connect(url, function(err, db) {
    if(!err){
        console.log("we are Connected");
        
    }
      createDocuments(db, function() {
	    db.close();
	  });
});

var createDocuments = function(db, callback) {
     var collection = db.collection('test');
     collection.insert([
	{firstname : "Rams",lastname: "Posa",emailid: "rams@journaldev.com"}, 
	{firstname : "Mani",lastname: "Nulu",emailid: "mani@journaldev.com"},  
	{firstname : "Bhargs",lastname: "Nulu",emailid: "Bhargs@journaldev.com"}, 
	], function(err, result) {
	callback(result);
      });
}
