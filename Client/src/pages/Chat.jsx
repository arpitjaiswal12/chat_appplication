import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Contact from "../Components/Contact";
import { useState } from "react";
import Welcome from "../Components/Welcome";
import ChatContainer from "../Components/ChatContainer";

export default function Chat() {
  const { currentUser, error, loading } = useSelector((state) => state.user);
  const [contacts, setContacts] = useState([]);
  const navigate = useNavigate();
  // console.log(contacts);
  const [currentChat, setCurrentChat] = useState(undefined);

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
  },[]);

  const handleChatChange = (chat) => {
    setCurrentChat(chat);
  }

  return (
    <>
      <Container>
        <div className="container">
          <Contact contacts={contacts} currentUser={currentUser} changeChat={handleChatChange} />
          {currentChat === undefined ? (
            <Welcome />
          ) : (
            <ChatContainer currentChat={currentChat} currentUser={currentUser}/>
          )}
        </div>
      </Container>
    </>
  );
}

const Container = styled.div`
  height: 86.5vh;
  width: 99.9vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
  align-items: center;
  background-color: #131324;
  .container {
    height: 85vh;
    width: 85vw;
    background-color: #00000076;
    display: grid;
    grid-template-columns: 25% 75%;
    @media screen and (min-width: 720px) and (max-width: 1080px) {
      grid-template-columns: 35% 65%;
    }
  }
`;
