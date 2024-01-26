import express  from "express";
const router = express.Router();

import  {SignUp} from "../Controllers/auth_controller.js" ;

router.post("/signup",SignUp);
// router.post("/login",Login);
// router.get('/signout', signOut)

export default router;