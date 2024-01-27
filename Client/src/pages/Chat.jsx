import React, { useEffect,useRef } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Contact from "../Components/Contact";
import { useState } from "react";
import Welcome from "../Components/Welcome";
import ChatContainer from "../Components/ChatContainer";
import {io} from "socket.io-client"



export default function Chat() {
  const socket = useRef();
  const { currentUser, error, loading } = useSelector((state) => state.user);
  const [contacts, setContacts] = useState([]);
  const navigate = useNavigate();
  // console.log(contacts);
  const [currentChat, setCurrentChat] = useState(undefined);

  useEffect(() => {
    const socketConn=()=>{
      if (currentUser) {
        socket.current = io("http://localhost:3001");
        socket.current.emit("add-user", currentUser._id);
      }
    }
    socketConn();
  }, [currentUser]);

  useEffect(() => {
    async function fetchContacts() {
      if (currentUser) {
        if (currentUser) {
          const res = await fetch(`/api/auth/allusers/${currentUser._id}`);
          const data = await res.json();
          console.log(data);
          setContacts(data);
        } else {
          navigate("/Signin");
        }
      }
    }
    return fetchContacts();
  },[currentUser]);

  const handleChatChange = (chat) => {
    setCurrentChat(chat);
  };

  return (
    <>
      <Container>
        <div className="container">
          <Contact contacts={contacts} currentUser={currentUser} changeChat={handleChatChange} />
          {currentChat === undefined ? (
            <Welcome />
          ) : (
            <ChatContainer currentChat={currentChat} currentUser={currentUser} socket={socket}/>
          )}
        </div>
      </Container>
    </>
  );
}

const Container = styled.div`
  height: 86.8vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
  align-items: center;
  background-color: white;
  .container {
    height: 85vh;
    width: 85vw;
    background-color: #9ACC9C;
    display: grid;
    grid-template-columns: 25% 75%;
    @media screen and (min-width: 720px) and (max-width: 1080px) {
      grid-template-columns: 35% 65%;
    }
  }
`;
