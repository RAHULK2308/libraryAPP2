const mongoose=require("mongoose");
mongoose.connect('mongodb+srv://RAHULK:rahul2308@cluster0.72kyu.mongodb.net/LIBRARYAPP?retryWrites=true&w=majority',{ useNewUrlParser: true,useUnifiedTopology: true });

mongoose.set('useFindAndModify', false); 

const Schema=mongoose.Schema;
const Bookschema=new Schema({
    title:String,
    author:String,
    genre:String,
    image:String

});



var Bookdata=mongoose.model('bookdata',Bookschema);

module.exports=Bookdata;