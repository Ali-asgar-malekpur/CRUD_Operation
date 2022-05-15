var express = require('express'); // Express web server framework
var bodyParser = require('body-parser'); // Parses the request body to be a readable json format

var CRUD_Operation = require('./routes/CRUD_Operation'); // Imports routes for the CRUD_Operations
var app = express(); // Creates an instance of an express application

// Set up mongoose connection
var mongoose = require('mongoose'); // mongoose for mongodb
var dev_db_url = 'mongodb+srv://AliasgarCRUD:<Aliasgar_@123>@crudoperationsmongodb.6sk6x.mongodb.net/CRUD_DataBase?retryWrites=true&w=majority'; // mongodb://localhost:27017/CRUD_DataBase

var mongoDB = process.env.MONGODB_URI || dev_db_url; // mongodb://localhost:27017/CRUD_DataBase
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.use(express.static('public')); // Tells express to use the public folder as the root directory for the static files

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use('/CRUD_Operations', CRUD_Operation);

var port = 3000; // Port number for the web server to listen on

//The port may differ in elsewhere computer hence I am using process.env.PORT, in my computer I am using 3000

app.listen(port, () => {
    console.log('Server is up and running on port numner ' + port);
});
