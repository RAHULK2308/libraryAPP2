const express=require('express');
const userRouter=express.Router();
const userdata=require('../model/userdata');
userRouter.use(express.urlencoded({extended:true}))

//flash setup

const session = require('express-session');
const flash = require('connect-flash');
userRouter.use(flash());

userRouter.use(session({
    secret:'geeksforgeeks',
    saveUninitialized: true,
    resave: true
}));



  //login&signup related operations

function Router(nav,nav1,nav2){

userRouter.get('/', function(req,res){
   
        res.render("login",{
            nav,
            title:'Library',
       
    })
  
})

userRouter.get('/signup', function(req,res){
   
    res.render("signup",{
        nav,
        title:'Library',
        
   
})

  
   
  //adding userdata in server

userRouter.post('/add', function(req,res){
  if(req.body.email=="rahulkm4002@gmail.com" && req.body.password=="abcd"){
      console.log("admin email & password does not use");
      res.redirect('/users/signup');
  }else{
   
    var items={
        username:req.body.username,
        email:req.body.email,
        password:req.body.password
        
    }
    var users=userdata(items);
    users.save();
    console.log(" user record was added");
    res.redirect('/users');

  }
})

})

//checking login operations

userRouter.post('/check', function(req,res){
 

    var useremail=req.body.email;
   var userpassword=req.body.password;
    userdata.findOne({email:useremail})
    .then(function(data){
        if(useremail=="rahulkm4002@gmail.com" && userpassword=="abcd"){
            res.redirect('/users/admin')
            console.log('your in admin')
        }else if(useremail==data?.email && userpassword==data.password){
            res.redirect('/users/home');
            console.log("login Successful");
        }else{
            req.flash('message', 'Incorrect Login attempt');
            res.send(req.flash('message'));
            console.log("Incorrect Login attempt");
            
        }

   })

})

//geting visitor home page

userRouter.get('/home', function(req,res){
   
    res.render("home",{
        nav1,
        title:'Library App',
        
   
})

})

//return admin home page

userRouter.get('/admin', function(req,res){
   
    res.render("adminhome",{
        nav2,
        title:'Library App',
        
})

})


return  userRouter;
}

module.exports=Router;

