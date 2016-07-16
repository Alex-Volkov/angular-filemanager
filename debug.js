/**
 * Created by Aleksandr Volkov on 16/07/16.
 */
const express = require('express');
var app = express();
var fs = require('fs');
var load = fs.readFileSync('./modal.html', {encoding:'utf8'});

app.use(function(req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	next();
});
app.get('/index/testUploadModal', function(req, res){
	res.send(load)
});
app.listen(5001, function(){
	console.log('listening');
});


