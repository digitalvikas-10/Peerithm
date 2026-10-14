import express from 'express';
import authController from '../controllers/auth.controller.js';



const router = express.Router();



// USER ROUTES
router.post('/user/register', authController.userRegisterController);
router.post('/user/login', authController.userLoginController);
router.get('/user/logout', authController.userLogoutController);


// MENTOR ROUTES
router.post('/mentor/register', authController.mentorRegisterController);
router.post('/mentor/login', authController.mentorLoginController);
router.get('/mentor/logout', authController.mentorLogoutController);




export default router;