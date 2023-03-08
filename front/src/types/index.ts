export interface USER_DATA {
    User: {
        nickname: string;
        id: string;
    };
    certified_account: boolean;
}

export type Period = "dawn" | "morning" | "afternoon" | "evening";

export type Emotion =
    | "confidence"
    | "excitement"
    | "thanks"
    | "comfort"
    | "worry"
    | "sad"
    | "hurt"
    | "angry";

export interface Diary {
    id: number;
    title: string;
    description: string;
    emotion: Emotion;
    lock: boolean;
    likes: number;
    weather: string;
    createdAt: string;
    updatedAt: string;
    author: string;
}

export interface FetchingDiaryListOption {
    user: "true" | "false";
    count: number;
    page: number;
    emotion: "all" | Emotion;
    lock: "true" | "false";
}

export interface ClientToServerEvents {
    hello: (data: string) => void;

    login: (nickname: string) => void;
    focus: (roomID: string) => void;
    transmit: (data: {
        roomID: number;
        transmitter: string;
        receiver: string;
        message: string;
    }) => void;
}

export interface ServerToClientEvents {
    connection: (sample: { id: number }) => void;

    receive: (data: {
        roomID: number;
        transmitter: string;
        receiver: string;
        message: string;
    }) => void;
}

export interface ChattingRoomList {
    maxParam: number;
    rooms: {
        [key: number]: {
            id: number;
            messages: {
                message: string;
                transmitter: string;
                receiver: string;
                createdAt: string;
            }[];
            user: {
                nickname: string;
            }[];
        };
    };
}
