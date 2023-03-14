import instance from ".";
import { ChattingRooms, Message } from "@/types";

export const createRoom = async (transmitter = "test", receiver: string) => {
    const result = await instance.post<{
        id: number;
    }>("http://localhost:3002/api/chatting", {
        transmitter,
        receiver,
    });

    return result.data;
};

export const fetchAllChatting = async (owner: string, count: number, page: number) => {
    const result = await instance.get<{ maxParam: number; rooms: ChattingRooms }>(
        `http://localhost:3002/api/chatting/rooms/?owner=${owner}&count=${count}&page=${page}`
    );

    return {
        maxParam: result.data.maxParam,
        currentParam: count * page,
        nextPage: page + 1,
        rooms: result.data.rooms,
    };
};

export const fetchAllMessage = async (roomID: number, count: number, page: number) => {
    const result = await instance.get<{ maxParam: number; messages: Message[] }>(
        `http://localhost:3002/api/chatting/messages/?roomID=${roomID}&count=${count}&page=${page}`
    );

    return {
        maxParam: result.data.maxParam,
        currentParam: count * page,
        nextPage: page + 1,
        messages: result.data.messages,
    };
};
