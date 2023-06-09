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

// for a specific Costume.
exports.Dogs_detail = async function(req, res) {
    console.log("detail" + req.params.id)
    try {
    result = await Dogs.findById( req.params.id)
    res.send(result)
    } catch (error) {
    res.status(500)
    res.send(`{"error": document for id ${req.params.id} not found`);
    }
   };

   // Handle Costume update form on PUT.
exports.Dogs_update_put = async function(req, res) {
 console.log(`update on id ${req.params.id} with body
${JSON.stringify(req.body)}`)
 try {
 let toUpdate = await Dogs.findById( req.params.id)
 // Do updates of properties
 if(req.body.Dogname)
 toUpdate.Dogname = req.body.Dogname;
 if(req.body.dogcost) toUpdate.dogcost = req.body.dogcost;
 if(req.body.dogsize) toUpdate.dogsize = req.body.dogsize;
 let result = await toUpdate.save();
 console.log("Sucess " + result)
 res.send(result)
 } catch (err) {
 res.status(500)
 res.send(`{"error": ${err}: Update for id ${req.params.id}
failed`);
 }
};

// Handle Costume delete on DELETE.
exports.Dogs_delete = async function(req, res) {
console.log("delete " + req.params.id)
try {
result = await Dogs.findByIdAndDelete( req.params.id)
console.log("Removed " + result)
res.send(result)
} catch (err) {
res.status(500)
res.send(`{"error": Error deleting ${err}}`);
}
};

// Handle a show one view with id specified by query
exports.Dogs_view_one_Page = async function(req, res) {
console.log("single view for id " + req.query.id)
try{
result = await Dogs.findById( req.query.id)
res.render('Dogsdetail',
{ title: 'Dogs Detail', toShow: result });
}
catch(err){
res.status(500)
res.send(`{'error': '${err}'}`);
}
};

// Handle building the view for creating a costume.
// No body, no in path parameter, no query.
// Does not need to be async
exports.Dogs_create_Page = function(req, res) {
    console.log("create view")
    try{
    res.render('Dogscreate', { title: 'Dogs Create'});
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
    };

    // Handle building the view for updating a costume.
// query provides the id
exports.Dogs_update_Page = async function(req, res) {
console.log("update view for item "+req.query.id)
try{
let result = await Dogs.findById(req.query.id)
res.render('Dogsupdate', { title: 'Dogs Update', toShow: result });
}
catch(err){
res.status(500)
res.send(`{'error': '${err}'}`);
}
};
// Handle a delete one view with id from query
exports.Dogs_delete_Page = async function(req, res) {
console.log("Delete view for id " + req.query.id)
try{
result = await Dogs.findById(req.query.id)
res.render('Dogsdelete', { title: 'Dogs Delete', toShow:
result });
}
catch(err){
res.status(500)
res.send(`{'error': '${err}'}`);
}
};




    