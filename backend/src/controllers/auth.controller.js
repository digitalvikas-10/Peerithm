import userModel from '../models/user.model.js';
import mentorModel from '../models/mentor.model.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';


// REGISTRATION, LOGIN, LOGOUT OF USER
async function userRegisterController(req, res) {

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

    const isUserExists = await userModel.findOne({ email });

    if (isUserExists) {
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

    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '3d' });

    res.cookie("token", token);

    res.status(201).json({
        message: "User created successfully.",
        user: {
            name,
            email,
            phone
        }
    })

}

async function userLoginController(req, res) {

    const { email, password } = req.body;

    const user = await userModel.findOne({ email });

    if (!user) {
        return res.status(401).json({
            message: "Email or Password is invalid"
        })
    }

    const isValidPassword = await bcrypt.compare(password, user.password);

    if (!isValidPassword) {
        return res.status(401).json({
            message: "Email or Password is invalid"
        })
    }

    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '3d' });

    res.cookie('token', token);

    res.status(200).json({
        message: "User login successfully",
        user: {
            name: user.name,
            email: user.email,
            phone: user.phone
        }
    })

}

async function userLogoutController(req, res) {

    res.clearCookie('token');

    res.status(200).json({
        message: "User logOut successfully",
    })

}




// REGISTRATION, LOGIN, LOGOUT OF MENTOR
async function mentorRegisterController(req, res) {

    const {
        name,
        email,
        password,
        phone,
        qualification,
        chooseSkills,
        experience,
        description,
        github,
        linkedin,
        projectLink
    } = req.body;

    const isMentorExists = await mentorModel.findOne({ email });

    if (isMentorExists) {
        return res.status(409).json({
            message: "Email already exists."
        })
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const mentor = await mentorModel.create({
        name,
        email,
        password: hashedPassword,
        phone,
        qualification,
        chooseSkills,
        experience,
        description,
        github,
        linkedin,
        projectLink
    })

    const token = jwt.sign({ mentorId: mentor._id }, process.env.JWT_SECRET, { expiresIn: '3d' });

    res.cookie("token", token);

    res.status(201).json({
        message: "Mentor created successfully.",
        mentor: {
            name,
            email,
            phone
        }
    })

}

async function mentorLoginController(req, res) {

    const { email, password } = req.body;

    const mentor = await mentorModel.findOne({ email });

    if (!mentor) {
        return res.status(401).json({
            message: "Email or Password is invalid"
        })
    }

    const isValidPassword = await bcrypt.compare(password, mentor.password);

    if (!isValidPassword) {
        return res.status(401).json({
            message: "Email or Password is invalid"
        })
    }

    const token = jwt.sign({ mentorId: mentor._id }, process.env.JWT_SECRET, { expiresIn: '3d' });

    res.cookie('token', token);

    res.status(200).json({
        message: "Mentor login successfully",
        Mentor: {
            name: mentor.name,
            email: mentor.email,
            phone: mentor.phone
        }
    })

}

async function mentorLogoutController(req, res) {

    res.clearCookie('token');

    res.status(200).json({
        message: "Mentor logOut successfully",
    })

}




export default {
    userRegisterController,
    userLoginController,
    userLogoutController,
    mentorRegisterController,
    mentorLoginController,
    mentorLogoutController
}