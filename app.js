const express=require('express');
const app=new express();
methodOverride = require("method-override");

const port=process.env.PORT || 4000;

const nav=[{
        link:'/users',name: 'login'
},
{
        link:'/users/signup', name:'signup'
}];

const nav1=require('./public/js/nav1');
const nav2=require('./public/js/nav2');

const booksRouter=require('./src/routes/bookrouter')(nav2);
const adminRouter=require('./src/routes/adminrouter')(nav2);
const userRouter=require('./src/routes/userrouter')(nav,nav1,nav2);
const authorsRouter=require('./src/routes/authorsrouter')(nav2);
const visitorRouter=require('./src/routes/visitorroutor')(nav1)
const visitorauthorrouter=require('./src/routes/visitorauthorrouter')(nav1)

app.use('/admin',adminRouter);
app.use('/books',booksRouter);
app.use('/users',userRouter);
app.use('/authors',authorsRouter);
app.use('/visitorbooks',visitorRouter);
app.use('/visitorauthors',visitorauthorrouter);

app.use(express.urlencoded({extended:true}))
app.use(methodOverride("_method"))
app.use(express.static('./public'));
app.set('view engine','ejs');
app.set('views','./src/views');



app.get('/',function(req,res){
    res.render("index",{
        nav,
        title:'Library App'
    });
})





app.listen(port,()=>{
    console.log("server is ready at" + port);
    console.log("admin- email id:rahulkm4002@gmail.com\npassword: abcd" )
});