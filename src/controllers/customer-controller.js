const customers = require('../models/customer-model');

const customerController = {
    createUser: async(req,res)=>{
        try{
            const payload = req.body;
            const user = await customers.create(payload);
            res.status(200).json({
                success: true,
                data: user
            })
        }catch(error){
            res.status(400).json({
                success: false,
                message: error.message
            })
        }
    },
    
    getUser: async (req,res) => {
        try{
            const user = await customers.find();
            res.status(200).json({
                success: true,
                data: user
            })

        }catch(error){
            res.status(500).json({
                success: false,
                data: error
            })
        }
    },

    getUserById : async(req,res)=>{
        try{
            const user = await customers.findById(req.params.id);
            if(!user){
                res.status(404).json({
                    success: false,
                    message: "Id not Found"
                })
            }
            res.status(200).json({
                success: true,
                data: user
            })
        }catch(error){
            res.status(400).json({
                success: false,
                message: error.message
            })
        }


    },
    updateUser: async(req,res)=>{
        try{
            const user = await customers.replaceOne(
                {_id:req.params.id},
                req.body,
                {returnDocument:'after'}
            );
            if(!user){
                res.status(404).json({
                    success: false,
                    message: "Id not Found"
                })
            }
            res.status(200).json({
                success: true,
                data: user
            })
        }catch(error){
            res.status(400).json({
                success: false,
                message: error.message
            })
        }
    },
    patchUser: async(req,res)=>{
        try{
            const user = await customers.findByIdAndUpdate(
                req.params.id,
                req.body,
                {returnDocument:'after'}
            );
            if(!user){
                res.status(404).json({
                    success: false,
                    message: "Id not Found"
                })
            }
            res.status(200).json({
                success: true,
                data: user
            })
        }catch(error){
            res.status(400).json({
                success: false,
                message: error.message
            })
        }
    },
    deleteUser : async(req,res)=>{
        try{
            const user = await customers.findByIdAndDelete(req.params.id)
            if(!user){
                res.status(404).json({
                    success: false,
                    message: "id not Found"
                })        
            }
            res.status(200).json({
                success: true,
                message: "deletion completed",
                data: user
            })
        }catch(error){
            res.status(400).json({
                success: false,
                message: error.message
            })
        }
    }
}  

module.exports = customerController;
