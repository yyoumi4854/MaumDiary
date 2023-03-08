import { ChangeEvent, MouseEvent, useState, useEffect } from "react";
import { useQuery, useMutation } from "@tanstack/react-query";
import socketIO, { Socket } from "socket.io-client";
import { useRecoilValue } from "recoil";

import useChatting from "@/hooks/useChatting";
import { ServerToClientEvents, ClientToServerEvents } from "@/types";
import { createRoom, getAllChatting } from "@/api/chatting";
import { userAtom } from "@/recoil/user";

const DiaryChat = () => {
    const sample = useChatting();
    console.log("sample", sample);
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
    return (
        <div>
            {/* <p>여긴 채팅화면 입니다.</p>
            <div>{mutate.data?.id ?? "데이터없음"}</div>
            <button style={{ background: "white" }} onClick={createButton}>
                방 생성하기
            </button>
            <br />
            <button style={{ background: "white" }}>로그인</button>
            <br />
            <input
                placeholder="보낼 사람"
                value={target}
                onChange={(e) => setTarget(e.target.value)}
            />
            <input value={msg} onChange={onChangeMessage} />
            <button style={{ background: "white" }}>메시지 보내기</button>
            <h1>채팅방</h1>
            {Object.keys(rooms).length > 0 &&
                Object.keys(rooms).map((roomID, idx) => {
                    return (
                        <div key={idx} onClick={onClickRoomNum}>
                            {roomID}
                        </div>
                    );
                })}
            <br />
            <h1>채팅내용</h1>
            <div style={{ height: "40vh", overflowX: "scroll" }}>
                {rooms[Number(roomNum)] &&
                    rooms[Number(roomNum)].messages.map(
                        ({ message, transmitter, receiver }, idx) => {
                            return (
                                <div key={idx} style={{ marginBottom: "20px" }}>
                                    {`메시지: ${message}`}
                                    <br />
                                    <span>{`보낸 사람: ${transmitter}`}</span>
                                    <span>{`받는 사람: ${receiver}`}</span>
                                </div>
                            );
                        }
                    )}
            </div> */}
        </div>
    );
};

export default DiaryChat;
