/**
 * Created by Aleksandr Volkov on 10/07/16.
 */
const express = require('express');
const filesRouter = require('angular-filemanager-nodejs-bridge').router;
const pathresolver = require('angular-filemanager-nodejs-bridge').pathresolver;
var fs = require('fs');

var app = express();

process.env.DATA_DIR = process.env.DATA_DIR || '/data/fm';

pathresolver.baseDir = function(req) {
	if(!req.query){
		req.body = {};
	}
	req.query.path = '';
	if(!req.body){
		req.body = {};
	}
	if(!req.body.params){
		req.body.params = {}
	}
	req.body.params.path = '';
	return process.env.DATA_DIR;
};
app.use(function(req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	next();
});
app.use(filesRouter);
app.listen(5000, function(){
	console.log('listening');
});




