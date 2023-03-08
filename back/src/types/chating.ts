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
    receive: (data: {
        roomID: number;
        transmitter: string;
        receiver: string;
        message: string;
    }) => void;
}
