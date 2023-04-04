# 파일 구성

-   api: restful api 모음
-   component : 라우터의 컴포넌트 모음
-   constant : react-query key, recoil key 모음
-   hooks : 커스텀훅 파일 모음
-   layout : 레이아웃시 사용될 컴포넌트 모음 (header, footer, main, topButton)
-   recoil : recoil 모음
-   route : 라우터별 컴포넌트 모음
-   style : 스타일 파일 모음
-   types : 공용으로 사용
-   utils : 중복 기능 함수 모음

<br><br>

# 설치 및 실행 방법

**1. 해당 프로젝트를 clone 합니다.**

```bash
https://github.com/yyoumi4854/MaumDiary.git
```

**2. 프로젝트 실행에 필요한 패키지를 설치합니다.**

```bash
cd front
yarn
```

**3. 실행합니다.**

```bash
cd front
yarn dev
```

<br><br>

# 기술 스택

<img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=TypeScript&logoColor=white"><br>

-   정적 타입을 지원하므로 컴파일 단계에서 에러를 막을 수 있음
-   명시적인 타입 지정으로 코드의 가독성을 높이고 예측할 수 있게 하며 디버깅이 쉽움

<br>

<img src="https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=Vite&logoColor=white"><br>

-   esmodule기반의 번들링으로 bulid가 빠르고 hmr가 아주 빠름

<br>

<img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=React&logoColor=black"><br>

-   재사용 가능한 UI구성 요소를 만들 수 있어 유지보수에 유리함
-   SPA(Single Page Application) 가능

<br>

<img src="https://img.shields.io/badge/React Router-CA4245?style=for-the-badge&logo=React Router&logoColor=white"><br>

-   싱글 페이지 어플리케이션을 구현해줌
-   페이지 이동시에 새로고침이 없는 웹서비스를 만들어줌

<br>

<img src="https://img.shields.io/badge/styled components-DB7093?style=for-the-badge&logo=styled components&logoColor=white"><br>

-   CSS-in-JS라서 JS 코드에서 사용하고 있던 상수나 변수들도 CSS 코드에서 쉽게 사용가능하게 함
-   조건부 스타일링을 쉽게 해줌

<br>

<img src="https://img.shields.io/badge/React Query-FF4154?style=for-the-badge&logo=React Query&logoColor=white"><br>

-   웹 애플리케이션에서 서버 상태 가져오기, 캐싱, 동기화 및 업데이트를 쉽게 만들어줌

<br>

<img src="https://img.shields.io/badge/Axios-5A29E4?style=for-the-badge&logo=Axios&logoColor=white"><br>

-   비동기로 HTTP 통신을 할 수 있으며 return을 promise 객체로 해주기 때문에 response 데이터를 다루기 쉬움
-   JSON 데이터 자동 변환

<br>

**Recoil**

-   다른 상태관리 라이브러리에 비해 사용 방법이 쉽고 간단함

<br>

**Recharts**

-   일기장 > 마음분석에서 다각형 그래프 구현을 위해 사용

<br><br>

# 역할 및 담당 업무

## **유민지**

---

## 역할

-   **Front-End**, **Design**

<br>

## 담당 업무

**1. 캘린더**

-   day.js로 캘린더 구현
-   리액트 훅으로 관리
-   캘린더 현재 날짜 위치 구현

<br>

**2. 일기 데이터 가져오기 및 데이터 캘린더에 넣기**

-   React-Query를 사용하여 매달 일기 데이터 패칭
-   React-Query useQuery 사용하여 구현

<br>

**3. 일기장 페이지 라우터**

-   react-router-dom v6의 outlet과 useLocation의 pathname을 이용하여 라우터 구현

<br>

**4. 일기장의 캘린더페이지(일기 Read)**

-   캘린더 구현
-   선택한 날짜에 대한 일기 정보를 띄어줌 구현
-   현재 날짜보다 이후 날짜를 선택할 경우 일기 작성 금지 구현
-   매달 쓴 일기의 마음분포도 막대 그래프 구현

<br>

**5. 일기 Create, Update, Delete**

-   React-Query useMutation으로 일기 CUD 구현
-   일기 수정시 입력한 일기 데이터 가지고 옮

<br>

**6. 회원가입, 아이디 찾기, 임시 비밀번호 발급, 회원탈퇴**

-   입력할때 알맞은 warnning, confirm문구 띄워줌 구현
-   onClick 및 debounce로 이벤트 제어
-   이메일, 인증코드, 닉네임 정규식 구현
-   RestfulAPI로 구현
-   useMutation으로 구현

<br>

**7. styled-component로 css 관리 및 반응형**

-   Theme, Global 설정
-   Text, Button, Input, Form, Common, Css, Animation등 스타일 공용화
-   media로 max-width (1200px, 768px, 448px)를 주어 반응형 기본 설정 및 구현

<br>

**8. Header, Footer**

-   Header addEventListener Scroll로 스크롤시 배경변화 구현
-   Header의 모바일 nav 구현
-   Footer 구현

<br>

**9. 마음 분석**

-   ReCharts로 달마다 마음 분석
-   매달 가장 많이 차지한 마음 찾기 기능 구현
-   긍정적 감정, 부정적 감정 비교 기능 구현
-   일주일 전, 한달 전, 일년전 마음 기능 구현

<br>

**10. 그외 기능 구현**

-   일기장 채팅 페이지 ui구현
-   서비스 소개 페이지 구현
-   Top버튼 구현
-   오류페이지 구현
-   무한스크롤 로딩바 구현
-   일기장 목록 페이지 ui구현
