import { ChangeEvent, MouseEvent, useState, useEffect } from "react";
import { useQuery, useMutation } from "@tanstack/react-query";
import socketIO, { Socket } from "socket.io-client";
import { useRecoilValue } from "recoil";

import { useChattingRooms, useMessages } from "@/hooks/useChatting";
import { ServerToClientEvents, ClientToServerEvents } from "@/types";
import { userAtom } from "@/recoil/user";

import Chat from "@/component/diaryChat/Chat";
import ChatList from "@/component/diaryChat/ChatList";
import { DiaryChatContent } from "@/style/component/diaryChat/DiaryChat-style";

const DiaryChat = () => {
    // const sample = useChatting();
    // console.log("sample", sample);
    useMessages();
    //

    // useEffect(() => {
    //     const interval = setInterval(() => {
    //         socket.on("receive", (receivedMessage) => {
    //             setRooms((prev) => {
    //                 if (String(receivedMessage.roomID) in prev === false) {
    //                     const new_rooms = { ...prev };

    //                     return (new_rooms[receivedMessage.roomID] = {
    //                         id: receivedMessage.roomID,
    //                         messages: [
    //                             {
    //                                 message: receivedMessage.message,
    //                                 transmitter: receivedMessage.transmitter,
    //                                 receiver: receivedMessage.receiver,
    //                             },
    //                         ],
    //                         user: [
    //                             { nickname: receivedMessage.transmitter },
    //                             { nickname: receivedMessage.receiver },
    //                         ],
    //                     });
    //                 }
    //                 let sample = prev[receivedMessage.roomID];
    //                 const prev_messages = sample.messages;
    //                 sample = {
    //                     ...sample,
    //                     messages: [...prev_messages, receivedMessage],
    //                 };

    //                 return sample;
    //                 // return prev;
    //             });
    //         });
    //     }, 3000);

    //     return () => clearInterval(interval);
    // });

    // const createButton = () => {
    //     mutate.mutate();
    // };

    // const onClickRoomNum = (e: MouseEvent<HTMLHeadingElement>) => {
    //     setRoomNum(e.currentTarget.innerText);
    // };

    // const onChangeMessage = (e: ChangeEvent<HTMLInputElement>) => {
    //     setMsg(e.target.value);
    // };

    // if (status !== "success") {
    //     return null;
    // }
    // console.log(rooms, Number(roomNum));
    const [on, setOn] = useState(false);
    // 상대방 선택 state만들기

    return (
        <DiaryChatContent>
            <ChatList on={on} setOn={setOn} />
            {on && <Chat setOn={setOn} />}
        </DiaryChatContent>
    );
};

export default DiaryChat;
