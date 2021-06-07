const express=require('express');
const userRouter=express.Router();
const userdata=require('../model/userdata');
userRouter.use(express.urlencoded({extended:true}))

function checkUserAuth(req, res, next) {
    if (req.session.user) return next();
    return next(new NotAuthorizedError());
  }

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

userRouter.post('/add', function(req,res){

   
    var items={
        username:req.body.username,
        email:req.body.email,
        password:req.body.password
        
    }
    var users=userdata(items);
    users.save();
    console.log(" user record was added");
    res.redirect('/users');


})

})


userRouter.post('/check',  checkUserAuth, function(req,res){
 

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
            res.redirect('/users');
            console.log("Incorrect Login attempt");
            

        }

   })
   useEffect(() => {
    fetch('/spotify/is-authenticated')
      .then(response => response.json())
      .then(data => {
        console.log(`authentication status: ${data.status}`)
        setAuthenticated(data.status)
        hideLoading()
      })
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
})

userRouter.get('/home', function(req,res){
   
    res.render("home",{
        nav1,
        title:'Library App',
        
   
})

})

userRouter.get('/admin', function(req,res){
   
    res.render("adminhome",{
        nav2,
        title:'Library App',
        
})

})



return  userRouter;
}

module.exports=Router;

