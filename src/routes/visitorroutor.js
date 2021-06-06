const express=require('express');
const visitorRouter=express.Router();
const Bookdata=require('../model/Bookdata');


function Router(nav1){

    visitorRouter.get('/', function(req,res){
        Bookdata.find()
        .then(function(books){
            res.render("visitorbooks",{
                nav1,
                title:'Library',
                books
            })
        })
      
    })

    visitorRouter.get('/:id',function(req,res){
        const id=req.params.id;
        Bookdata.findOne({_id:id})
        .then(function(book){
            res.render('visitorbook',{
                nav1,
                title:'Library App',
                book
            })
        })
      
    })

  
      
    
    return  visitorRouter;
    }
    
    module.exports=Router;
    
    