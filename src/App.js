import React, { useState, useEffect } from "react";
import styled, { createGlobalStyle } from "styled-components";
import axios from 'axios';

function App() {
  const [posts, setPosts] = useState([]);

  // 컴포넌트가 렌더링(화면에 그려지는 것) 될 때마다 useEffect가 실행됨.
  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts')
    .then( ({data}) => {
          setPosts(data);
          /*
             posts에 저장.
             [useEffect 로직]
              이때, useEffect 내부에서 state를 변경시켰기 때문애 컴포넌트의 재렌더링이 일어난다. 

             [문제점]
              렌더링시에는 다시 useEffect가 실행되니 아래와 같이 무한 렌더링이 일어나게 된다.
              렌더링 -> useEffect -> posts state 변화 -> 렌더링 -> useEffect -> posts state 변화 -> 렌더링 -> ...

            [해결]
              이를 해결하기 위해, useEffect에 두번때 인자를 전달한다.
              두번째 인자로 배열을 전달하면 렌더링시에 배열 내의 요소가 변화될 때에만 useEffect를 실행한다. 
              빈 배열( [] )을 전달하면 변화를 감지할만한 요소 자체가 없으므로 useEffect는 최초 렌더링시에 한번만 실행되는 것이 보장된다.
            

          */
    })
  })

  /*
      [참고]
      .then( ({data}) => {

      에서 ({data})는 ES6의 Destructing문법이다.
      이렇게 사용하면, 받아온 response객체안에 있는 data배열을 바로 참조할 수 있다. 
  */


  /*
        JSX안에서는 중괄호 {} 를 사용해 자바스크립트 함수를 사용할 수 있다.
  */
  return (
    <Container>
      <GlobalStyle />
        {posts.map((post, index) => (
          <Post key={index}>
            <Title>{post.title}</Title>
            <Body>{post.body}</Body>
          </Post>
        ))}
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