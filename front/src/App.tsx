import { useState } from "react";

import Header from "./layout/header/Header";

import reactLogo from "./assets/react.svg";

// 외부 라이브러리를 임포트 하는 구문

// 내부에 모듈을 임포트하는 구문

// 스타일 모듈을 임포트하는 구문

// svg

// 근데 이런거 다 정하고 하는게 팀장 / 팀의 역할이에요 모든 컨벤션 import order rules

// axios response type
// recoil type
// props

function App() {
    const [count, setCount] = useState(0);

    // 상태 관련 리코일 useState useState값을 이용한 무언가, 리액트 쿼리
    // 리액트 라우터 돔 관련 useLocation, useNavigation, useParams

    // 이펙트 관련

    // memo(컴포넌트를 메모라이징) useMemo(연산한 결과) useCallback(함수) 비용이 있어서 너무 남발하면 더 느려져요

    return (
        <div className="App" style={{ background: "lightyellow", height: "120vh" }}>
            <Header />
            <div>
                <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
                    <img src="/vite.svg" className="logo" alt="Vite logo" />
                </a>
                <a href="https://reactjs.org" target="_blank" rel="noreferrer">
                    <img src={reactLogo} className="logo react" alt="React logo" />
                </a>
            </div>
            <h1>Vite + React</h1>
            <div className="card">
                <button onClick={() => setCount((count) => count + 1)}>count is {count}</button>
                <p>
                    Edit <code>src/App.tsx</code> and save to test HMR
                </p>
            </div>
            <p className="read-the-docs">Click on the Vite and React logos to learn more</p>
        </div>
    );
}

export default App;
