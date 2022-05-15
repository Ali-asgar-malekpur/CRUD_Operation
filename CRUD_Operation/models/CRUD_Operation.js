var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Tasks_Schema = new Schema({
    Description: {type: String, required: true, max: 100},
    Completed:{type: Boolean, required: true}
});


// Export the model
module.exports = mongoose.model('CRUD_Operation', Tasks_Schema);