import express from "express";
const router=express.Router();
import {addMessage,getMessage} from "../Controllers/message_controller.js"

router.post("/",addMessage);
router.get("/:conversationId",getMessage);

export default router;
