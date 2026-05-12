import express from 'express';
import { signup, login } from '../Controllers/auth.controller.js';
import upload from '../Middleware/upload.js';

const router = express.Router();

// router.post('/signup', signup);

// Use upload.single('avatar') for single file upload with field name 'avatar'
router.post('/signup', upload.single('avatar'), signup);
router.post('/login', login);

export default router;
