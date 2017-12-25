var express = require('express');
var router = express.Router();
  

var User = require('../model/user');

/* GET users listing. */
router.get('/', function(req, res, next) {
  // get all the users
  User.find({}, function(err, users) {
    if (err) throw err;
   // res.send(users);
    res.render('user', { userList: users });
    // object of all the users
    console.log(users);});
});

router.get('/create', function(req, res, next) {
  res.render('create');
});

router.post('/',function(req,res,next){
  
  let user = new User(req.body);
  user.save(req.body,function(err) {
    if (err) throw err;
    res.send(user);
  });
});

router.put('/:id', function(req, res, next) {
  User.findByIdAndUpdate(req.params.id, req.body,{new: true}, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});


module.exports = router;
