import express from "express";
import { config } from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import http from "http";
import { Server } from "socket.io";

import { ServerToClientEvents, ClientToServerEvents } from "types/chating";
import userRouter from "./route/user";
import accountRouter from "./route/account";
import diaryRouter from "./route/diary";
import certificationRouter from "./route/certification";
import tokenRouter from "./route/token";
import chattingRouter from "./route/chating";
// import chatRouter from "./route/chat";
import error from "./middleware/error";
import chatting from "./services/chattingService";
// import chatService from "./services/chatService";

config();

const app = express();
export const httpServer = http.createServer(app);

const io = new Server<ClientToServerEvents, ServerToClientEvents>(httpServer, {
    cors: {
        origin: "http://localhost:3001",
        credentials: true,
    },
});

io.on("connection", (socket) => {
    console.log("연결: ", socket.connected);

    socket.on("login", (nickname) => {
        if (io.sockets.adapter.rooms.has(nickname) === false) {
            socket.join(nickname);
        }
    });

    // Legacy
    socket.on("focus", async (roomID) => {
        socket.join(roomID);
        console.log("현재 활성화된 룸: ", io.of("/").adapter.rooms);
    });

    socket.on("transmit", async (data) => {
        // receive
        const { roomID, transmitter, receiver, message } = data;
        const result = await chatting.addMessage(roomID, transmitter, receiver, message);

        socket
            .to(receiver)
            .emit("receive", { roomID: result.roomID, transmitter, receiver, message });
    });

    // blur 만들어서 방을 지워야함!, 전송자, 수신자 둘다 없는 방은 아예 디비에서 지워야함!

    socket.on("disconnect", () => {
        console.log("연결이 끊김");
    });
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
    cors({
        origin: "http://localhost:3001",
        credentials: true,
        optionsSuccessStatus: 200,
    })
);
app.use(cookieParser());

app.use("/api/chatting", chattingRouter);
app.use("/api/users", userRouter);
app.use("/api/account", accountRouter);
app.use("/api/diaries", diaryRouter);
// app.use("/api/chats", chatRouter);
app.use("/api/certification", certificationRouter);
app.use("/api/token", tokenRouter);

// app.use(chatRouter);
app.use(error);

// interface MessagePayload {
//     chatRoom: string;
//     msgText: string;
//     userid: string;
// }

// const server = http.createServer(app);
// export const sc = new socket.Server(server, {
//     cors: {
//         origin: "*",
//         methods: ["GET", "POST"],
//         credentials: false,
//     },
// });

// let createdRooms: string[] = [];

// if (sc !== undefined) {
//     sc.on("connection", (socket: Socket) => {
//         socket.on("message", async ({ chatRoom, msgText, userid }: MessagePayload) => {
//             sc.emit("message", { sender: userid, msgText, chatRoom });

//             await chatService.saveMessege(chatRoom, msgText, String(userid));
//         });
//         //foreach 사용하기 => for 대신에

//         socket.on("room-list", async (usermodel: string) => {
//             //socket emit 으로 받아온 userid로 방을 검색
//             const result = await chatService.roomList(Number(usermodel));
//             sc.emit("create-room", result, usermodel); // 대기실 방 생성
//             return createdRooms;
//         });

//         socket.on("create-room", async (inviter: string, invitee: string, message: string) => {
//             const save = chatService.saveChat(inviter, invitee);
//             let user_model_id: string;

//             if (Number(inviter) > Number(invitee)) {
//                 user_model_id = inviter + "," + invitee;
//             } else {
//                 user_model_id = invitee + "," + inviter;
//             }
//             const f = sc.emit("create-room", user_model_id); // 대기실 방 생성

//             const exists = createdRooms.find((createdRoom) => createdRoom === user_model_id);
//             const saveMessege = chatService.saveMessege(user_model_id, message, String(inviter));

//             socket.join(user_model_id); // 기존에 없던 room으로 join하면 room이 생성됨
//             createdRooms.push(user_model_id); // 유저가 생성한 room 목록에 추가
//             const r = sc.emit("message", {
//                 sender: inviter,
//                 msgText: message,
//                 chatRoom: user_model_id,
//             }); // 방을 만들고 메세지 보내기
//             return { success: true, payload: user_model_id };
//         });

//         socket.on("join-room", async (roomName: string, userid: string) => {
//             const result2 = await chatService.readMessage(String(roomName), String(userid));
//             sc.emit("join-room", result2);
//             socket.join(roomName); // join room
//             return { success: true };
//         });
//         socket.on("leave-room", (roomName: string) => {
//             socket.leave(roomName); // leave room
//             sc.emit("leave-room");
//             return { success: true };
//         });
//     });
// }

httpServer.listen(3002, () => {
    console.log("Server is loaded on " + 3002);
});
