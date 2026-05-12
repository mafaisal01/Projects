import userSchema from '../Models/userSchema.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';



const signup = async (req, res) =>{

    const {username, email, password} = req.body;
    try {

        const existingUser = await userSchema.findOne({ email : email});
        if(existingUser){
            return res.status(400).json({message: "User already exists"});
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const result = await userSchema.create({
            email: email,
            password: hashedPassword,
            username: username
        });

        const token = jwt.sign({email : result.email, id : result._id }, process.env.SECRET_KEY);
        res.status(201).json({user: result, token: token});
        
    } catch (error) {
        console.log(error);
        res.status(500).json({message: "Something went wrong"});
    }

}

const signin = async (req, res)=>{
    
    const {email, password} = req.body;

    try {
        
        const existingUser = await userSchema.findOne({ email : email});
        if(!existingUser){
            return res.status(404).json({message: "User not found"});
        }

        const matchPassword = await bcrypt.compare(password, existingUser.password);

        if(!matchPassword){
            return res.status(400).json({message : "Invalid Credentials"});
        }

        const token = jwt.sign({email : existingUser.email, id : existingUser._id }, process.env.SECRET_KEY);
        res.status(200).json({user: existingUser, token: token});


    } catch (error) {
        console.log(error);
        res.status(500).json({message: "Something went wrong"});
    }

}

export {signup, signin} ;
