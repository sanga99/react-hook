import React, { useState } from "react";
import styled, { createGlobalStyle } from "styled-components";

function App() {
  const [posts, setPosts] = useState([]);
  return (
    <Container>
      <GlobalStyle />
      <Post>
        <Title>Title1</Title>
        <Body>Body1</Body>
      </Post>
      <Post>
        <Title>Title2</Title>
        <Body>Body2</Body>
      </Post>
      <Post>
        <Title>Title3</Title>
        <Body>Body3</Body>
      </Post>
      <Post>
        <Title>Title4</Title>
        <Body>Body4</Body>
      </Post>
    </Container>
  );
}

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
  }
`;

const Container = styled.div`
  min-height: 100vh;
  padding: 200px 0;
  display: grid;
  grid-template-columns: repeat(4, 300px);
  grid-template-rows: repeat(auto-fit, 300px);
  grid-auto-rows: 300px;
  grid-gap: 30px 20px;
  justify-content: center;
  background: #55efc4;
  box-sizing: border-box;
`;

const Post = styled.div`
  border: 1px solid black;
  border-radius: 20px;
  background: white;
  box-shadow: 10px 5px 5px #7f8fa6;
`;

const Title = styled.div`
  height: 20%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid black;
  font-weight: 600;
`;

const Body = styled.div`
  height: 80%;
  padding: 11px;
  border-radius: 20px;
`;

export default App;