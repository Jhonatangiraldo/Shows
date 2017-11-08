var express     = require('express');
var app         = express();
var bodyParser  = require('body-parser');
var mongoose    = require('mongoose');
var cors        = require('cors')

var config = require('./config/config'); 
var User   = require('./app/model/user'); 

var authenticateController = require('./app/controller/authenticate-controller');
var loginController = require('./app/controller/login-controller');
var userController = require('./app/controller/user-controller');
var galleryController = require('./app/controller/gallery-controller');

mongoose.connect("mongodb://admin:123456@ds151963.mlab.com:51963/letflix"); 

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

app.use(authenticateController);
app.post('/authenticate', loginController.login);
app.get('/logged', loginController.logged);
app.post('/user', userController.createUser);
app.get('/gallery', galleryController.getShows);
app.get('/likeShow', galleryController.likeShow);

var port = process.env.PORT || 8080;
app.listen(port);
console.log('Server listening at http://localhost:' + port);