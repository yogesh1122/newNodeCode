const express = require('express')
const router = express.Router();


router.get('/',(req,res)=>{
    res.send('<h1>WECOME TO FIRST APP....</h1>')
})


router.get('/about',(req,res)=>{
    res.send('<h1>@@2222WECOME TO FIRST APP....</h1>')
})



module.exports = router;