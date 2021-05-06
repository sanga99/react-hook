import React, { useState } from "react";
import styled from "styled-components";

function App() {
  // state선언 : HTTP통신을 통해 가져온 배열을ㄹ 저장할 state를 선언.
  // posts의 초기값 : 빈 배열
  const [posts, setPosts] = useState([]);           
  return <Container>App</Container>;
}

const Container = styled.div``;

export default App;