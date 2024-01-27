import User from "../model/user_model.js";
import bcryptjs from "bcryptjs";
import { errorHandler } from "../utils/error.js";
import jwt from "jsonwebtoken";

export const SignUp = async (req, res) => {
  // console.log(req.body);
  try {
    const { username, email, password } = req.body;
    const hashedPassword = bcryptjs.hashSync(password, 10);
    const newUser = new User({ username, email, password: hashedPassword });

    try {
      await newUser.save();
      res.status(201).json("User created successfully!");
    } catch (error) {
      next(error);
    }
  } catch (error) {
    return res.status(500).json({
      error: "Error While Creating User",
    });
  }
};

export const SignIn = async (req, res, next) => {
  const { email, password } = req.body;
  try {
    const validUser = await User.findOne({ email }); // finding email from db
    if (!validUser)
      return next(errorHandler(404, "User not found! Please SignUp")); // is email is valid or not
    const validPassword = bcryptjs.compareSync(password, validUser.password); //finding the password from db
    if (!validPassword) return next(errorHandler(401, "Wrong credentials!")); // is password is valid or not
    const token = jwt.sign({ id: validUser._id }, process.env.JWT_SECERT); // creating  a token that makes user login for period of time
    const { password: pass, ...rest } = validUser._doc; //destructure the passwords as user can'nt see the password
    res
      .cookie("access_token", token, {
        httpOnly: true,
        expires: new Date(Date.now() + 24 * 60 * 60),
      }) // expire of an token
      .status(200)
      .json(rest); //return all thing except password
  } catch (error) {
    next(error);
  }
};

export const signOut = async (req, res, next) => {
  try {
    res.clearCookie("access_token");
    res.status(200).json("User has been logged out!");
  } catch (error) {
    next(error);
  }
};

export const deleteUser = async (req, res, next) => {
  if (req.user.id !== req.params.id)
    return next(errorHandler(401, "You can only delete your own account!"));
  try {
    await User.findByIdAndDelete(req.params.id);
    res.clearCookie("access_token");
    res.status(200).json("User has been deleted!");
  } catch (error) {
    next(error);
  }
};

export const getAllUsers = async (req,res,next)=>{
  try {
    const users = await User.find({ _id: { $ne: req.params.id } }).select([
      "email",
      "username",
      "avatar",
      "_id",
    ]);
    return res.json(users)
  } catch (error) {
    next(error);
  }
}
