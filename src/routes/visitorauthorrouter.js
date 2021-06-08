const express=require('express');
const visitorauthorsRouter=express.Router();

const  Authorsdata=require('../model/Authorsdata')

//visitor: author related operations

function Router(nav1){

    
visitorauthorsRouter.get('/', function(req,res){
    Authorsdata.find()
    .then(function(authors){

        res.render("visitorauthors",{
            nav1,
            title:'Library',
            authors
        })
    })
  
})

visitorauthorsRouter.get('/:id',function(req,res){
    const id=req.params.id;
    Authorsdata.findOne({_id:id})
    .then(function(author){
        res.render('visitorauthor',{
            nav1,
            title:'Library App',
            author
        })
    })
  
})
  
      
    
    return  visitorauthorsRouter;
    }
    
    module.exports=Router;
    
    