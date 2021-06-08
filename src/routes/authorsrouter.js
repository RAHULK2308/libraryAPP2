
const express=require('express');
const authorsRouter=express.Router();
const  Authorsdata=require('../model/Authorsdata')

//authors related operations 

function Router(nav){
    
authorsRouter.get('/', function(req,res){
    Authorsdata.find()
    .then(function(authors){


        res.render("authors",{
            nav,
            title:'Library',
            authors
        })
    })
  
})

authorsRouter.get('/:id',function(req,res){
    const id=req.params.id;
    Authorsdata.findOne({_id:id})
    .then(function(author){
        res.render('author',{
            nav,
            title:'Library App',
            author
        })
    })
  
})
        
return  authorsRouter;
}

module.exports=Router;

