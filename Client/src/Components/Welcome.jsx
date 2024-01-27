import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'

export default function Welcome() {
    const { currentUser, error, loading } = useSelector((state) => state.user);
  return (
    <Container>
      <h1>
        Welcome, <span>{currentUser.username}!</span>
      </h1>
      <h3>Please select a chat to Start messaging.</h3>
    </Container>
  )
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  flex-direction: column;
  span {
    color: #4e0eff;
  }
`;
