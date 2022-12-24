const mongoose = require('mongoose');

module.exports= ()=>
{
mongoose.connect('mongodb://localhost:27017/newnode',{ useUnifiedTopology: true,useNewUrlParser:true })
.then( ()=> { console.log('Mongodb Successfully connected...')})
.catch( (e)=>{console.log('ERROR',e)})

}