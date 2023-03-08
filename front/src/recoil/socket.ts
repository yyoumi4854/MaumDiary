import { selector } from "recoil";
import socketIO, { Socket } from "socket.io-client";

import { ServerToClientEvents, ClientToServerEvents } from "@/types";
import { Chatting } from "@/constant/RECOIL_KEY";
import { userAtom } from "./user";

// const socketAtom = atom({
//     key: Chatting.SOCKET,
//     default: (() => {
//         const socket: Socket<ServerToClientEvents, ClientToServerEvents> = socketIO(
//             "http://localhost:3002",
//             {
//                 reconnectionAttempts: 1,
//                 reconnection: false,
//                 reconnectionDelay: 60 * 60 * 1000,
//             }
//         );

//         socket.emit("login", userData.User.nickname);
//     })
// })

const socketSelector = selector({
    key: Chatting.SOCKET,
    get: ({ get }) => {
        const userData = get(userAtom);

        if (userData === null) {
            return null;
        }

        const socket: Socket<ServerToClientEvents, ClientToServerEvents> = socketIO(
            "http://localhost:3002",
            {
                reconnectionAttempts: 1,
                reconnection: false,
                reconnectionDelay: 60 * 60 * 1000,
            }
        );

        socket.emit("login", userData.User.nickname);

        return { socket, userData };
    },
});

export default socketSelector;
