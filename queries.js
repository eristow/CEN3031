/* Fill out these functions using Mongoose queries*/

var findLibraryWest = function() {
  /* 
    Find the document that contains data corresponding to Library West,
    then log it to the console. 
   */

    //get the name Library West
    User.find({name: 'Library West'}, function(err, listing) {
        if(err) throw err;

        //object of the user
        console.log(listing);
    });
    
};

var removeCable = function() {
  /*
    Find the document with the code 'CABL'. This cooresponds with courses that can only be viewed 
    on cable TV. Since we live in the 21st century and most courses are now web based, go ahead
    and remove this listing from your database and log the document to the console. 
   */
    
    //find the code 'CABL'
    User.findOneAndRemove({code: 'CABL'}, function(err, listing) {
        if (err) throw err;

        //we have deleted the instance
        console.log(listing);
};

var updatePhelpsLab = function() {
  /*
    Phelps Laboratory's address is incorrect. Find the listing, update it, and then 
    log the updated document to the console. 
   */
    
    //find the PhelpsMemorial and update the address
    User.findOneAndUpdate({name: 'Phelps Laboratory'}, {address: 'Phelps Lab, Gainesville, FL 32603'}, function (err, listing) {
        if(err) throw err;

        //we have updated the Lab
        console.log(listing);
};

var retrieveAllListings = function() {
  /* 
    Retrieve all listings in the database, and log them to the console. 
   */
    Listing.find({}, function(err, listing) {
        if(err) throw err;

        console.log(listing);
    
};

findLibraryWest();
removeCable();
updatePhelpsLab();
retrieveAllListings();
