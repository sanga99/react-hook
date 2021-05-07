<br/>

##   React Hook - useEffect, useState

<br/>

---

#### [설명]
Hook은 React 16.8에 새로 추가된 기능이다.
Hook은 React로 컴포넌트 사용하면서 그동안 부딪혔던 수많은 문제들을 해결하기 위해 나왔다

Hook을 사용하면 컴포넌트로부터 상태 관련 로직을 추상화할 수 있다. 
즉, Hook은 계층의 변화 없이 상태 관련 로직을 재사용할 수 있도록 도와준다.
Hook은 class를 작성하지 않고도 state와 다른 React의 기능들을 사용할 수 있게 해준다.

#### [사용조건]
최상위(at the top level)에서만 Hook을 호출해야 한다. 반복문, 조건문, 중첩된 함수 내에서 Hook을 실행하지 마라.
React 함수 컴포넌트 내에서만 Hook을 호출해야 한다. 일반 JavaScript 함수에서는 Hook을 호출해서는 안 된다. (Hook을 호출할 수 있는 곳이 딱 한 군데 더 있다. 바로 직접 작성한 custom Hook 내이다.)

<br/>

---

#### [프로젝트 생성 및 초기설정]

1. 프로젝트생성
        $ npx create-react-app react-hook

2. src폴더에서 App.js와 index.js를 제외한 모든 파일 삭제


3. styled-components 설치
        $ npm install --save styled-components


4. index.js / App.js 초기코드
[index.js]

        import React from "react";
        import ReactDOM from "react-dom";
        import App from "./App";

        ReactDOM.render(<App />, document.getElementById("root"));

[App.js]

        import React, { useState } from "react";
        import styled from "styled-components";

        function App() {
        return <Container>App</Container>;
        }

        const Container = styled.div``;

        export default App;


<br/>

---

[참고문헌]
https://codingbroker.tistory.com/30?category=799517
