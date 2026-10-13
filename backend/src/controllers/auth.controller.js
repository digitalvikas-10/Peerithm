import userModel from '../models/user.model.js';
import bcrypt from 'bcryptjs';



async function userRegisterController(req, res){

    const {
        name,
        email,
        password,
        phone,
        qualification,
        goal,
        chooseSkills,
        github,
        linkedin,
        projectLink
    } = req.body;

    const isUserExists = await userModel.findOne({email});
    console.log(isUserExists)

    if(isUserExists){
        return res.status(409).json({
            message: "Email already exists."
        })
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await userModel.create({
        name,
        email,
        password: hashedPassword,
        phone,
        qualification,
        goal,
        chooseSkills,
        github,
        linkedin,
        projectLink
    })

    res.status(201).json({
        message: "User created successfully.",
        user: {
            name,
            email,
            phone
        }
    })

}



export default {
    userRegisterController
}