
var bill = require('../models/bill');
const serializer = require('../../serializer/billSerializer'); 
const messageSerializer = require('../../serializer/messageSerializer.js');
var async = require('asyncawait/async');
var await = require('asyncawait/await');

/**
 * GET /
 * Home page.
 */
exports.index = async (function(req,res) {
	try{
		var abill =  await (bill.fetchAll());
		res.send(serializer.billSerializer.serialize(abill.toJSON()));
	}catch(err){
		res.status(500).send(err+'');
		console.log("test ->"+err);
	}
});

/**
 * GET month/:month
 */
exports.billByMonth = async (function(req,res) {
	try{
		var sbill = await (bill.where({month: req.params.month})
										   .fetch());
		res.send(serializer.billSerializer.serialize(sbill.toJSON()));
	}catch(err){
		res.status(500).send(err+'');
		console.log("test ->"+err);
	}
});



/**
 * GET type/:type
 */
exports.billByType = async (function(req,res) {
	try{
		var sbill = await (bill.where({type: req.params.type})
										   .fetch());
		res.send(serializer.billSerializer.serialize(sbill.toJSON()));
	}catch(err){
		res.status(500).send(err+'');
		console.log("test ->"+err);
	}
});


/**
 * GET /paid
 */
exports.billPaid = async (function(req,res) {
	try{
		var abill =  await (bill.where('status','=',1)
									 .fetchAll());
		res.send(serializer.billSerializer.serialize(abill.toJSON()));
	}catch(err){
		console.log(err);
	}
});

/**
 * GET /id
 */
exports.show = async (function(req,res) {
	try{
		var sbill = await (bill.where({id: req.params.id})
										   .fetch());
		res.send(serializer.billSerializer.serialize(sbill.toJSON()));
	}catch(err){
		res.status(500).send(err+'');
		console.log("test ->"+err);
	}
});

/**
 * POST Create new
 */
exports.new = async (function(req,res) {
	try{
		var nbill = strong_params(req.body);
		nbill = await (nbill.save());
		res.send(serializer.billSerializer.serialize(nbill.toJSON()));
	}catch(err){
		console.log(err);
	}
});

/**
 * PUT Update
 */
exports.update = async (function(req, res) {
	try{
		//find
		var ubill = await(bill.forge({
									id: req.params.id
								}).
								fetch({
									require: true
								}));
		//update
		ubill = await(ubill.save(
			req.body
		));
		res.send(serializer.billSerializer.serialize(ubill.toJSON()));
	}catch(err){
		res.status(500).send(err+'');
		console.log("test ->"+err);
	}
});


/**
 * DELETE soft destroy
 */
exports.destroy = async (function(req, res) {
	try{
		//find
		var dbill = await(bill.forge({
									id: req.params.id
								}).
								fetch({
									require: true
								}));
		//hard delete
		dbill = await(dbill.destroy());
		let response = [{id: 200, message: 'Sucess'}];
		res.send(messageSerializer.messageSerializer.serialize(response));
	}catch(err){
		res.status(500).send(err+'');
		console.log("test ->"+err);
	}
});

function strong_params(body){
	return new bill({
		name: body.name,
		month: body.month,
		cost: body.cost,
		company: body.company,
		type: body.type,
		limit_date: body.limit_date,
		status: body.status
	});
}