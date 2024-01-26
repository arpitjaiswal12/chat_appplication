import express  from "express";
// import {verifyToken} from "../utils/VerifyUser.js"
const router = express.Router();

import {newConversation,getUserConverstion,getTwoConveration} from "../Controllers/conversation_controller.js"

router.post("/",newConversation);
router.get("/:userID",getUserConverstion);
router.get("/find/:firstUserId/:secondUserId",getTwoConveration);

export default router;