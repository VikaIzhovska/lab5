const mongoose=require('mongoose');
const connStr ="mongodb+srv://Admin:admin1224@clusterfirst.zwt6i.mongodb.net/mydb";
const options ={
    useUnifiedTopology:true,
    useNewUrlParser: true,
    useCreateIndex: true
}
mongoose.Promise = global.Promise;
mongoose.connect(connStr,options).then(()=>{
    console.log("mongodb connect...")
});
module.exports=mongoose;