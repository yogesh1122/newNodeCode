const { userModel } = require('../models/userModel')

async function saveUser(req,res){
    console.log(req.body);

    const saveUser = await userModel.save(req.body);
    
}

async function deleteUserByID(req,res){
    console.log(req.body);
}

async function updateUser(req,res){
    console.log(req.body);
}

async function getAllUser(req,res){
    console.log(req.body);
}


module.exports = { 
    saveUser,
    deleteUserByID,
    getAllUser,
    updateUser
}