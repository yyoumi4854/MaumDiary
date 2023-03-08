import { useState, useEffect } from "react";
import socketIO, { Socket } from "socket.io-client";
import { useRecoilValue } from "recoil";
import { useInfiniteQuery } from "@tanstack/react-query";

import { ServerToClientEvents, ClientToServerEvents } from "@/types";
import socketSelector from "@/recoil/socket";
import { userAtom } from "@/recoil/user";
import { getAllChatting } from "@/api/chatting";
import { ChattingRoomList } from "@/types";
import { Chatting } from "@/constant/QUERY_KEY";

/**
 * 깊은 고민...
 * 음...
 * 카톡도 확인했는지 안했는지 여부를 표시해주는 기능이 있잖아
 * 그게 저장이 된다는 말은 결국은 db에 저장되어 있다는거거든
 * 차라리 chattingroom에 newMessage 정수 값을 넣어서
 * 메시지를 보낼때마다 그 친구를 +1 하는거지
 * 왜냐하면 우리 서비스에 당장에 각 메시지마다 읽었나 않읽었나 여부는 없으니께...
 * 그래서 그 채팅방이 focus되면 그 newMessage값을 0으로 바꾸는걸로 하면 될듯!
 */

type rooms = ChattingRoomList["rooms"];

const socket: Socket<ServerToClientEvents, ClientToServerEvents> = socketIO(
    "http://localhost:3002",
    {
        reconnectionAttempts: 1,
        reconnection: false,
        reconnectionDelay: 60 * 60 * 1000,
    }
);

const useChatting = () => {
    // const {socket, userData} = useRecoilValue(socketSelector);
    const userData = useRecoilValue(userAtom);

    const [roomsData, setRoomsData] = useState<rooms | null>(null);
    // const [selectedRoom, setSelectedRoom] = useState<ChattingRoomList["rooms"][0] | null>(null);
    const [selectedRoomID, setSelectedRoomID] = useState<string>("");

    if (userData === null) {
        return null;
    }

    const { data, fetchNextPage, hasNextPage, status } = useInfiniteQuery({
        queryKey: [Chatting.ROOMS],
        queryFn: ({ pageParam = 1 }) => getAllChatting(userData.User.nickname, 4, pageParam),
        getNextPageParam: (lastpage) =>
            lastpage.maxParam > lastpage.currentParam ? lastpage.nextPage : undefined,
        onSuccess: (data) => {
            // const sample = data.pages.map(({ rooms }) => {
            //     return Object.values(rooms).map((room) => {
            //         const messageData = room.messages[0];

            //         return {
            //             id: room.id,
            //             transmitter: messageData.transmitter,
            //             message: messageData.message,
            //             date: messageData.createdAt,
            //         };
            //     });
            // });

            console.log("새단장", data);
        },
    });

    //
    useEffect(() => {
        console.log("hasNextPage", hasNextPage);
        if (hasNextPage) {
            fetchNextPage();
        }
    }, [hasNextPage]);

    //

    // if (status !== "success") {
    //     console.log("jh", status);
    //     return null;
    // }

    const onClickRoom = (room: rooms[keyof rooms]) => {
        setSelectedRoomID(String(room.id));
    };

    socket.emit("login", userData.User.nickname);

    const transmitMessage = (target: string, message: string) => {
        socket.emit("transmit", {
            roomID: Number(selectedRoomID),
            transmitter: userData.User.nickname,
            receiver: target,
            message: message,
        });
    };

    socket.on("receive", (receivedMessage) => {
        console.log(receivedMessage);
    });

    if (roomsData === null) {
        return null;
    }

    // console.log("hi", data.pages);
    // const sample =

    // const roomList = Object.values(data.pages.flat(1)).map(({rooms}) => {
    //     const messageData = rooms.messages[0];

    //     return {
    //         id: room.id,
    //         transmitter: messageData.transmitter,
    //         message: messageData.message,
    //         date: messageData.createdAt,
    //     };
    // });
    // return [onClickRoom, roomList];
    return data?.pages;
};

export default useChatting;
