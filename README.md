# Introduce

> 마음일기는 하루 하루 자신의 감정을 기록하고 사람들과 마음을 나눌 수 있는 SNS 서비스 입니다.

<br>

# Skill

<img src="https://img.shields.io/badge/ESLint-4B32C3?style=for-the-badge&logo=ESLint&logoColor=white">

<br>

### FrontEnd

<img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=TypeScript&logoColor=white"><img src="https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=Vite&logoColor=white"><img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=React&logoColor=black"><img src="https://img.shields.io/badge/React Router-CA4245?style=for-the-badge&logo=React Router&logoColor=white"><img src="https://img.shields.io/badge/styled components-DB7093?style=for-the-badge&logo=styled components&logoColor=white"><img src="https://img.shields.io/badge/React Query-FF4154?style=for-the-badge&logo=React Query&logoColor=white"><img src="https://img.shields.io/badge/Axios-5A29E4?style=for-the-badge&logo=Axios&logoColor=white">

-   **Recharts**

<br>

### BackEnd

<img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=TypeScript&logoColor=white"><img src="https://img.shields.io/badge/ts node-3178C6?style=for-the-badge&logo=ts node&logoColor=white"><img src="https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=Express&logoColor=white"><img src="https://img.shields.io/badge/Prisma-2D3748?style=for-the-badge&logo=Prisma&logoColor=white"><img src="https://img.shields.io/badge/SQLite-003B57?style=for-the-badge&logo=SQLite&logoColor=white">

<br><br>

# Setup

-   Front

```bash
cd code_base/front
touch .env
echo "VITE_PORT=3001" > .env
```

-   Back

```bash
cd code_base/back
touch .env
echo "PORT=3002" > .env
```

<br><br>

# Command

-   Eslint

```bash
$code_base/. yarn eslint .
```

-   Front

```bash
$code_base/front yarn dev
$code_base/front yarn build
```

-   Back

```bash
$code_base/back yarn dev
$code_base/back yarn build
```

<br><br>

# Feature Implementation

## 1. 공개 일기

공개로 표시한 일기는 다른 유저들도 볼 수 있으며,  
마음에 드는 일기는 공감을 표시할 수 있으며, 실시간 채팅이 가능합니다.

-   일기 공감(좋아요) 기능
-   공개 일기를 통해 실시간으로 채팅 가능

![메인_공개일기_pc](https://user-images.githubusercontent.com/64270940/229685860-f223b65f-abfe-41da-98a2-e342566fb634.PNG)

<br>

## 2. 일기 Read(읽기)

일기는 캘린더, 목록 형태로 볼 수 있습니다.

-   캘린더
    -   선택한 날짜의 일기를 볼 수 있습니다.
-   목록
    -   마음별로, 공개/비공개별로 일기를 볼 수 있습니다.

![캘린더_pc](https://user-images.githubusercontent.com/64270940/229689333-c60a79cf-4cc7-48a1-9674-478087d95799.png)
![목록_pc](https://user-images.githubusercontent.com/64270940/229689718-ccc0ec59-dc38-44b5-96d7-bfa17914fcfd.png)

<br>

## 3. 일기 Create(생성), Update(갱신), Delete(삭제)

일기를 쓰고, 수정하고, 삭제할 수 있습니다.

![일기_CUD](https://user-images.githubusercontent.com/64270940/229705783-87f94bc5-1697-4c75-90ee-034c6b9fcb1b.png)

<br>

## 4. 회원제

-   회원가입
-   로그인
    -   이메일, 카카오 로그인
-   아이디 찾기, 임시 비밀번호 발급
-   회원 정보 수정
    -   프로필, 닉네임, 비밀번호 수정
-   회원 탈퇴

![회원제](https://user-images.githubusercontent.com/64270940/229704990-7aa673b6-dabd-49b1-9273-91d426ae0eff.png)

<br>

## 5. 나의 마음 분석

지금까지 쓴 일기를 토대로 나의 마음을 분석해 줍니다.

-   매달 마음 통계(그래프)
-   일주일 전 오늘, 한달 전 오늘, 일년 전 오늘

![마음분석_pc](https://user-images.githubusercontent.com/64270940/229691027-54281cab-5e2b-43e0-b074-ca98ab311c0e.png)

<br>

## 6. 시간에 따라 변화하는 테마

시간에 따라 4번(새벽, 낮, 오후, 밤) 변화합니다.

![시간변화](https://user-images.githubusercontent.com/64270940/229704006-1c713a1f-4e19-43d3-beb4-444127d4f6e0.png)

<br>

## 7. 실시간 채팅

-   다른 유저들과의 실시간 채팅
-   채팅 알람기능

![채팅_pc](https://user-images.githubusercontent.com/64270940/229692957-8a832aeb-0222-4d4e-b747-ce37a4b40089.png)

<br>

## 8. 일기 마음 분석

일기를 쓰면 일기의 마음(감정)을 분석해 줍니다.  
마음(감정)은 자신감, 신남, 감사, 편안, 불안, 슬픔, 상처, 분노 총 8가지가 존재합니다.

![감정들](https://user-images.githubusercontent.com/64270940/229690465-8ef48d96-8065-4d28-bf6e-cebcc5acf5be.PNG)

<br><br>

# Role

| 이름   | 역할              | 담당 업무                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| ------ | ----------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 유민지 | Front-End, Design | 1. 캘린더 구현<br>2. 일기 데이터 가져오기 및 데이터 캘린더에 넣기<br>3. 일기장 페이지 라우터 구현<br>4. 일기장의 캘린더페이지(일기 Read) 구현<br>5. 일기 Create, Update, Delete구현<br>6. 회원가입, 아이디 찾기, 임시 비밀번호 발급, 회원탈퇴 구현<br>7. styled-component로 css 관리 및 반응형 구현<br>8. Header, Footer<br>9. 마음 분석<br>10. 서비스 소개 페이지 구현<br>11. Top버튼, 무한스크롤 로딩바 구현<br>12. 일기장 채팅 페이지, 일기장 목록페이지 ui구현<br>13. 오류페이지 구현 |
