const mongoose=require("mongoose");
mongoose.connect('mongodb+srv://RAHULK:rahul2308@cluster0.72kyu.mongodb.net/LIBRARYAPP?retryWrites=true&w=majority',{ useNewUrlParser: true,useUnifiedTopology: true });

mongoose.set('useFindAndModify', false); 

const Schema=mongoose.Schema;
const Authorsschema=new Schema({
    name:String,
    DOB:String,
    Book:String,
    image:String

});



var Authorsdata=mongoose.model('authorsdata',Authorsschema);

module.exports=Authorsdata;