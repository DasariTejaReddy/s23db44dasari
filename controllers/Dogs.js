var Dogs = require('../models/Dogs');
// List of all Dogss

exports.Dogs_list = function(req, res) {
 res.send('NOT IMPLEMENTED: Dogs list');
};
// for a specific Dogs.
exports.Dogs_detail = function(req, res) {
 res.send('NOT IMPLEMENTED: Dogs detail: ' + req.params.id);
};
// Handle Dogs create on POST.
exports.Dogs_create_post = function(req, res) {
 res.send('NOT IMPLEMENTED: Dogs create POST');
};
// Handle Dogs delete form on DELETE.
exports.Dogs_delete = function(req, res) {
 res.send('NOT IMPLEMENTED: Dogs delete DELETE ' + req.params.id);
};
// Handle Dogs update form on PUT.
exports.Dogs_update_put = function(req, res) {
 res.send('NOT IMPLEMENTED: Dogs update PUT' + req.params.id);
};// List of all Dogss

// List of all Dogs
exports.Dogs_list = async function(req, res) {
    try{
    theDogs = await Dogs.find();
    res.send(theDogs);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
   };



// VIEWS
// Handle a show all view
exports.Dogs_view_all_Page = async function(req, res) {
    try{
    theDogs = await Dogs.find();
    res.render('Dogs', { title: 'Dogss Search Results', results: theDogs });
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
   };


   // Handle Costume create on POST.
exports.Dogs_create_post = async function(req, res) {
    console.log(req.body)
    let document = new Dogs();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    // {"Dogs_type":"goat", "cost":12, "size":"large"}
    document.Dogname = req.body.Dogname;
    document.dogsize = req.body.dogsize;
    document.dogcost = req.body.dogcost;
    try{
    let result = await document.save();
    res.send(result);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
};