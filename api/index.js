import express from "express";
import { Server } from "socket.io";
import { createServer } from "http";
import cors from "cors";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import dbConnect from "./config/database.js";
import path from "path";
import authRoute from "./routes/auth_route.js";
import msgRoute from "./routes/msg_route.js";

dotenv.config();
dbConnect(); //connection with database

const __dirname = path.resolve();
const app = express();

// middleware to parse json request body
app.use(express.json());

app.use(cookieParser());

//mounts (adding/ appending the ) todo API routes :: when user hits the user the bydefault path is atteached with the entered request

app.use("/api/auth", authRoute);
app.use("/api/messages", msgRoute);


app.listen(3001, () => {
  console.log(`Server is started at port 3001`);
});


// conncetion with real time chat application 
// using socket.io

const server = createServer(app);

const io = new Server(server, {
  cors: {
    origin: "http://localhost:3001",
    methods: ["GET", "POST"],
    credentials: true,
  },
});

global.onlineUsers = new Map();
io.on("connection", (socket) => {
  global.chatSocket = socket;
  socket.on("add-user", (userId) => {
    onlineUsers.set(userId, socket.id);
  });

  socket.on("send-msg", (data) => {
    const sendUserSocket = onlineUsers.get(data.to);
    if (sendUserSocket) {
      socket.to(sendUserSocket).emit("msg-recieve", data.msg);
    }
  });
});