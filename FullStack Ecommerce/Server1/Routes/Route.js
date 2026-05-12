import express  from "express";
import {userSignUp, userLogIn} from '../Controller/UserController.js';
import { getProducts, getProductById } from "../Controller/ProductController.js";
import {addPaymentGateway,paymentResponse} from '../Controller/PaymentController.js'

const router  = express.Router();

//login & signup

router.post('/signup', userSignUp);
router.post('/login', userLogIn);


router.get('/products', getProducts);
router.get('/product/:id', getProductById);

router.post('/payment', addPaymentGateway);
router.post('/callback', paymentResponse);


export default router;