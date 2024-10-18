const UserModel = require("../models/auth.modul")

const sendFormData = async (req,res) => {
    try{
        const {Name,MobileNumber,Country,City,Address,Email,State,Pincode} = req.body
        if(!Name||!MobileNumber||!Country||!City||!Address||!Email||!State||!Pincode){
            return res.status(404).json({msg:"please enter all details",success:false})
        }

        await UserModel.create({
            Name:Name,
            MobileNumber:MobileNumber,
            Country:Country,
            City:City,
            Address:Address,
            Email:Email,
            State:State,
            Pincode:Pincode
        })
        return res.status(200).json({msg:"Form data Submited",success:true})
    }catch(err){
        console.log(err.message)
        return res.status(500).json({msg:"internal err",success:false})
    }
}

module.exports={sendFormData}