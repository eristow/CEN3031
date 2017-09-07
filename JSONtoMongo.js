'use strict';
/* 
  Import modules/files you may need to correctly run the script. 
  Make sure to save your DB's uri in the config file, then import it with a require statement!
 */
var fs = require('fs'),
    mongoose = require('mongoose'), 
    Schema = mongoose.Schema, 
    Listing = require('./ListingSchema.js'), 
    config = require('./config');

var contents = fs.readFileSync("./listings.json");
var listings = JSON.parse(contents);

/* Connect to your database */
mongoose.connect('mongodb://eristow:password123@ds129344.mlab.com:29344/cen3031-eristow');

/* 
  Instantiate a mongoose model for each listing object in the JSON file, 
  and then save it to your Mongo database 
 */

for(var i = 0; i < listings.entries.length; i++) {
    var entry = listings.entries[i];
    entry["created_at"] = null;
    entry["updated_at"] = null;
    var model1 = new Listing(entry);
    model1.save(function(err) {
        if(err) return handleError(err);
    });
}

/* 
  Once you've written + run the script, check out your MongoLab database to ensure that 
  it saved everything correctly. 
 */
