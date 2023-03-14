import { useState, useEffect } from "react";
import socketIO, { Socket } from "socket.io-client";
import { useRecoilValue, useRecoilState, useSetRecoilState } from "recoil";
import { useInfiniteQuery } from "@tanstack/react-query";

import { ServerToClientEvents, ClientToServerEvents } from "@/types";
import socketSelector from "@/recoil/socket";
import { userAtom } from "@/recoil/user";
import { unreadSelector, selectedRoomIDAtom } from "@/recoil/chatting";
import { fetchAllChatting, fetchAllMessage } from "@/api/chatting";
import { ChattingRooms } from "@/types";
import { Chatting } from "@/constant/QUERY_KEY";

class MessageSocket {
    private socket: Socket<ServerToClientEvents, ClientToServerEvents> = socketIO(
        "http://localhost:3002",
        {
            reconnectionAttempts: 1,
            reconnection: false,
            reconnectionDelay: 60 * 60 * 1000,
        }
    );

    private transmitter: string = "";

    constructor(nickname: string) {
        this.socket.emit("login", nickname);
        this.transmitter = nickname;
        console.log("만들어짐");
    }

    transmit(roomID: number, receiver: string, message: string) {
        this.socket.emit("transmit", {
            transmitter: this.transmitter,
            receiver,
            roomID,
            message,
        });
    }

    receive() {
        this.socket.on("receive", (receivedMessage) => {
            console.log(receivedMessage);
        });
    }
}

// const socket: Socket<ServerToClientEvents, ClientToServerEvents> = socketIO(
//     "http://localhost:3002",
//     {
//         reconnectionAttempts: 1,
//         reconnection: false,
//         reconnectionDelay: 60 * 60 * 1000,
//     }
// );

export const useChattingRooms = () => {
    // const [rooms, setRooms] = useState<Rooms | {}>({});
    const userData = useRecoilValue(userAtom);
    const [unread, setUnread] = useRecoilState(unreadSelector);
    const setSelectedRoomID = useSetRecoilState(selectedRoomIDAtom);

    if (userData === null) {
        return null;
    }

    const { data, hasNextPage, fetchNextPage, status } = useInfiniteQuery({
        queryKey: [Chatting.ROOMS],
        queryFn: ({ pageParam = 1 }) => fetchAllChatting(userData.User.nickname, 4, pageParam),
        getNextPageParam: (lastpage) =>
            lastpage.maxParam > lastpage.currentParam ? lastpage.nextPage : undefined,
        onSuccess: (data) => {
            setUnread(data.pages[data.pages.length - 1].rooms.unread);
        },
    });

    const selectedRoom = (roomID: number) => {
        setSelectedRoomID(roomID);

        // TODO: read 라는 소켓 라우터 만들어야함, 읽었다는 표시해야함
    };
    return { unread, setUnread, data, hasNextPage, fetchNextPage, status };
};

export const useMessages = () => {
    const userData = useRecoilValue(userAtom);
    const selectedRoomID = useRecoilValue(selectedRoomIDAtom);

    if (userData === null) {
        return null;
    }

    const messageSocket = new MessageSocket(userData.User.nickname);

    messageSocket.receive();

    return useInfiniteQuery({
        queryKey: [Chatting.Messages],
        queryFn: ({ pageParam = 2 }) => fetchAllMessage(selectedRoomID, 10, pageParam),
        getNextPageParam: (lastpage) =>
            lastpage.maxParam > lastpage.currentParam ? lastpage.nextPage : undefined,
    });
};

const useChatting = () => {
    // const {socket, userData} = useRecoilValue(socketSelector);
    const [selectedRoomID, setSelectedRoomID] = useState<number>(0);

    // const [unread, setUnread] = useRecoilState(unreadSelector);

    // if (userData === null) {
    //     return null;
    // } else {

    // }

    // const onClickRoom = (room: ChattingRooms[keyof ChattingRooms]) => {
    //     // setSelectedRoomID(String(room.id));
    // };

    // const transmitMessage = (target: string, message: string) => {
    //     socket.emit("transmit", {
    //         roomID: Number(selectedRoomID),
    //         transmitter: userData.User.nickname,
    //         receiver: target,
    //         message: message,
    //     });
    // };

    // socket.on("receive", (receivedMessage) => {
    //     console.log(receivedMessage);
    // });

    // return data;
};
