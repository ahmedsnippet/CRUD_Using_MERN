import signupModel from "../model/signup.model.js";


export const create = async(req,res)=>{
    try {
        const userData = new signupModel(req.body);
        if (!userData) {
            return res.status(404).json({msg:"Can Not Create Account"})
        }
        const saveData = await userData.save()
        res.status(200).json(saveData)
    } catch (error) {
        res.status(500).json({error : error});
    }
}