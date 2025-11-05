const mongoose=require('mongoose')
mongoose.connect('mongodb://localhost:27017/mern')
.then(
    ()=>{console.log('connected to db');}
)
.catch((err)=>{console.error(err);})

module.exports=mongoose