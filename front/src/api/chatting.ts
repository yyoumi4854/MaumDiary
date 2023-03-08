import instance from ".";
import { ChattingRoomList } from "@/types";

export const createRoom = async (transmitter = "test", receiver: string) => {
    const result = await instance.post<{
        id: number;
    }>("http://localhost:3002/api/chatting", {
        transmitter,
        receiver,
    });

    return result.data;
};

export const getAllChatting = async (owner: string, count: number, page: number) => {
    const result = await instance.get<ChattingRoomList>(
        `http://localhost:3002/api/chatting/all?owner=${owner}&count=${count}&page=${page}`
    );

    return {
        maxParam: result.data.maxParam,
        currentParam: count * page,
        nextPage: page + 1,
        rooms: result.data.rooms,
    };
};
