import express  from "express";
import {verifyToken} from "../utils/VerifyUser.js"
const router = express.Router();

import  {SignUp,SignIn,signOut,deleteUser} from "../Controllers/auth_controller.js" ;

router.post("/signup",SignUp);
router.post("/signin",SignIn);
router.get('/signout', signOut)
router.delete('/delete/:id',verifyToken,deleteUser);

export default router;
