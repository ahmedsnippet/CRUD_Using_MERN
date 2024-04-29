import userModel from "../model/user.model.js";



// Create 
export const create = async(req,res)=>{
    try {
        const userData = new userModel(req.body);

        if (!userData) {
            return res.status(404).json({msg:"Can Not Create Data"})
        }

        const savedData = await userData.save();

        res.status(200).json(savedData);

    } catch (error) {
        res.status(500).json({error : error});
    }
}

//Read 

export const getAll = async(req,res)=>{
    try {
        const userData = await userModel.find();

        if (!userData) {
            res.status(404).json({msg:"user Data Not Found"})
        }
        res.status(200).json(userData)

    } catch (error) {
        res.status(500).json({error : error});
    }
}

// find Particular Data

export const getOne = async(req,res)=>{
    try {
        const id = req.params.id;
        const userExist = await userModel.findById(id);

        if (!userExist) {
            res.status(404).json({msg : "User Not Found By Id"})
        }
        res.status(200).json(userExist)

    } catch (error) {
        res.status(500).json({error : error});
    }
}

// Update 

export const update = async(req,res)=>{
    try {
        const id = req.params.id
        const userExist = await userModel.findById(id);
        if (!userExist) {
            res.status(401).json({msg: "User Not Found Line 63"})
        }

        const updatedData = await userModel.findByIdAndUpdate(id, req.body, {new:true})

        res.status(200).json(updatedData);


    } catch (error) {
        res.status(500).json({error : error});
    }
}

// Delete

export const deleteUser = async(req,res)=>{
    try {
        const id = req.params.id;

        const userExist = await userModel.findById(id);

        if (!userExist) {
            res.status(404).json({msg: "user not Exist Line 85"})
        }
        await userModel.findByIdAndDelete(id);
        res.status(200).json({msg: "user deleted Successfully"})

    } catch (error) {
        res.status(500).json({error : error});
    }
}