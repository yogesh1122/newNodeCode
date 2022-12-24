const express = require('express');
const router = express.Router();

//user controller import
const { saveUser } = require('../Controller/userController')

router.get('/',(req,res)=>{
    res.send('<h3>Welcome to this Project</h3>')
})

router.post('/saveuser',saveUser )


module.exports = router;