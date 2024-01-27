import express from "express";
const router = express.Router();
import { addMessage, getMessage } from "../Controllers/message_controller.js";

router.post("/addmsg", addMessage);
router.post("/getmsg", getMessage);

export default router;
