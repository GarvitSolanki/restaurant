const models= require('../models')
const jwt = require('jsonwebtoken')
const SECRET_KEY = '80f1a593-2aaa-427e-bcc1-a870ccdc4bc2'
module.exports = {
  create: async (req, res) => {
    if (!req.body.name || !req.body.email || !req.body.password || !req.body.email || !req.body.contact_no || !req.body.address) {
      return res
        .status(400)
        .send({ message: 'fields required' })
    }
    try{
    const existingUser = await models.User.findOne({email: req.body.email})
    if(existingUser)
    {
        return res.status(400).json({message:"User already exist"})
    }


    const result=await models.User.create({
      name: req.body.name,
      email:req.body.email,
      password:req.body.password,
      contact_no:req.body.contact,
      address:req.body.address
       
    })
    const token = jwt.sign({email:result.email,id :result.id},SECRET_KEY)
    return res.status(201).json({ message: 'User created',user:result,token:token })
    }
    catch(error){
        console.log(error);
    }
  },

  signIn: async(req,res) =>{

    const {email, password} = req.body;
    try{
    const existingUser = await models.User.findOne({where:{email: email}})
    console.log({existingUser})
    if(!existingUser)
    {
        return res.status(400).json({message:"User Not exists"})
    }



    if(password!==existingUser.password){
        return res.status(400).json({message:"Incorrect Password"})

    }

    const token = jwt.sign({email:email,id :existingUser.id},SECRET_KEY)
    return res.status(201).json({ user:existingUser,token:token })
    }
    catch(error){
        console.log(error);
    }
  },
  findAll: async (req, res) => {
    return res.status(200).json(await models.User.findAll())
  }


}