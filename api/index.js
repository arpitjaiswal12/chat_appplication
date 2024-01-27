import express from "express";
import { Server } from "socket.io";
import { createServer } from "http";
import cors from "cors";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import dbConnect from "./config/database.js";
import jwt from "jsonwebtoken";
import path from "path";
import authRoute from "./routes/auth_route.js";
import msgRoute from "./routes/msg_route.js";


dotenv.config();
dbConnect(); //connection with database

const __dirname = path.resolve();
const app = express();

app.use(express.json());

app.use(cookieParser());

app.use(cors());

app.use("/api/auth", authRoute);
app.use("/api/messages", msgRoute);

app.use(express.static(path.join(__dirname,'/Client/dist')));
app.get('*',(req,res)=>{
  res.sendFile(path.join(__dirname,'Client','dist','index.html'));
})

const server = createServer(app);

const io = new Server(server, {
  cors: {
    // origin: "http://localhost:5173",
    origin: ":",
    methods: ["GET", "POST"],
    credentials: true,
  },
});

global.onlineUsers = new Map();

io.on("connection", (socket) => {
  // console.log(socket.id);
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

server.listen(3001, () => {
  console.log(`Server is started at port 3001`);
});



