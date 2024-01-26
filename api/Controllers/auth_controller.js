import User from "../model/user_model.js"
import bcryptjs from "bcryptjs"


export const SignUp = async (req, res) => {
    // console.log(req.body);
    try {
        const {username,email,password}=req.body;
        const hashedPassword = bcryptjs.hashSync(password,10);
        const newUser = new User({username,email,password : hashedPassword});

        try {
            await newUser.save();
            res.status(201).json('User created successfully!');
        } catch (error) {
            next(error)
        }
        
    }catch (error) {
        return res.status(500).json({
            error: "Error While Creating User" ,
        });
         
    }
    
};