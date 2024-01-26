import express  from "express";
const router = express.Router();

import  {SignUp,SignIn} from "../Controllers/auth_controller.js" ;

router.post("/signup",SignUp);
router.post("/signin",SignIn);
// router.get('/signout', signOut)

export default router;