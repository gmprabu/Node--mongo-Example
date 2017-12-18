var express = require('express');
var router = express.Router();
  

var User = require('../model/user');

/* GET users listing. */
router.get('/', function(req, res, next) {
  



// create a new user called chris
var chris = new User({
  name: 'Chris',
  username: 'starlord55',
  password: 'password' ,
  admin : true
});

// call the custom method. this will just add -dude to his name
// user will now be Chris-dude
chris.dudify(function(err, name) {
  if (err) throw err;

  console.log('Your new name is ' + name);
});

// call the built-in save method to save to the database
chris.save(function(err) {
  if (err) throw err;

  res.send('User saved successfully!');
  console.log('User saved successfully!');
});

// get all the users
User.find({}, function(err, users) {
  if (err) throw err;

  // object of all the users
  console.log(users);
});

// get the user starlord55
User.find({ username: 'starlord55' }, function(err, user) {
  if (err) throw err;

  // object of the user
  console.log(user);
});




});

module.exports = router;
