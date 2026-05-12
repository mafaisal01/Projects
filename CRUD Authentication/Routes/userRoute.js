import express from 'express';
import { signup, signin } from '../Contollers/userController.js';
import auth from '../Middlewares/auth.js';

const route = express.Router();


route.post("/signup",auth, signup);
route.post("/signin",auth, signin);

export default route;