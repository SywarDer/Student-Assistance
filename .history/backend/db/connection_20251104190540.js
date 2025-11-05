const mongoose=require('mongoose')
mongoose.connect()
.then(
    ()=>{console.log('connected to db');}
)
.catch((err)=>{console.error(err);})

module.exports=mongoose