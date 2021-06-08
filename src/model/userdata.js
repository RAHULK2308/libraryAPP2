const mongoose=require("mongoose");
mongoose.connect('mongodb+srv://RAHULK:rahul2308@cluster0.72kyu.mongodb.net/LIBRARYAPP?retryWrites=true&w=majority',{ useNewUrlParser: true,useUnifiedTopology: true });
mongoose.set('useFindAndModify', false); 

const Schema=mongoose.Schema;
const Userschema=new Schema({
    username:String,
    password:String,
    email:String
});

var userdata=mongoose.model('userdata',Userschema);

module.exports=userdata;