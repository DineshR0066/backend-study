const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken')
const users = require('../models/user-model')
require('dotenv').config();
const usercontroller = {
    createUser: async(req, res)=>{
        try{
        const {username, password} = req.body;
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = await users.create({
            username: username,
            password: hashedPassword
        })
        res.status(500).json({
            message: "user registered successfully"
        });
        }catch(error){
            res.status(400).json(error.message);
        }
    },
    loginUser: async(req, res)=>{
        try{
            const {username, password} = req.body;
            const user = await users.findOne({username});
            if(!user){
                res.status(404).json({message: "user not found"});
            }
            const isMatch = await bcrypt.compare(password, user.password);
            if(!isMatch){
                res.json({
                    message:"invalid Credentials"
                })
            }
            const token = jwt.sign(
                {_id: user._id},
                process.env.JWT_SECRETKEY,
                {expiresIn: "1h"}
            )
            res.json({token});

        }catch(error){
            res.json({
                message:error.message
            })
        }
    },
    deleteUser: async (req, res)=>{
        try{
            const {username, password} = req.body;
            const user = await users.findOne({username});
            if(!user){
                res.status(404).json({message: "user not found"});
            }
            const isMatch = await bcrypt.compare(password, user.password);
            if(!isMatch){
                return res.status(400).json({
                    message: "password Incorrect"
                })
            }
            await users.findOneAndDelete({username});
            res.status(200).json({
                message: "user deleted successfully",
                data: user
            })
        }catch(error){
            res.status(400).json({ 
                message: error.message
            });
        }
    }
}

module.exports = usercontroller;