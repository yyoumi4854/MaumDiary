import { PrismaClient } from "@prisma/client";
import AppError from "lib/AppError";
import userService from "./userService";

class Chatting {
    private prisma = new PrismaClient();

    async createRoom(transmitter: string, receiver: string) {
        const checking = await userService.checking(receiver);

        if (checking === null) {
            throw new AppError("UserNotExistError");
        }

        const result = await this.prisma.chattingRoom.create({
            data: {
                users: {
                    connect: [{ nickname: transmitter }, { nickname: receiver }],
                },
            },
            select: {
                id: true,
            },
        });

        await this.prisma.$disconnect();

        return result;
    }

    async deleteRoom(roomID: number) {
        const checking = await this.checking(roomID);

        if (checking === null) {
            // not exist error 만들어야함
            return;
        }

        await this.prisma.chattingRoom.delete({
            where: {
                id: checking.id,
            },
            select: {
                messages: true,
            },
        });

        await this.prisma.$disconnect();

        return { result: true };
    }

    async joinRoom(roomID: number, nickname: string) {
        const room = await this.checking(roomID);

        if (room === null) {
            return { result: false };
        }

        await this.prisma.chattingRoom.update({
            where: {
                id: roomID,
            },
            data: {
                users: {
                    connect: {
                        nickname,
                    },
                },
            },
        });

        return { result: true };
    }

    async exitRoom(roomID: number, nickname: string) {
        const room = await this.checking(roomID);

        if (room === null) {
            return { result: false };
        }

        await this.prisma.chattingRoom.update({
            where: {
                id: roomID,
            },
            data: {
                users: {
                    connect: {
                        nickname,
                    },
                },
            },
        });

        return { result: true };
    }

    async addMessage(roomID: number, transmitter: string, receiver: string, message: string) {
        let room = await this.checking(roomID);

        // in case, if receiver deletes chat room
        if (room === null) {
            room = await this.createRoom(transmitter, receiver);
        }

        const result = await this.prisma.messege.create({
            data: {
                transmitter,
                receiver,
                message,
                chattingRoom: {
                    connect: {
                        id: room.id,
                    },
                },
            },
            select: {
                message: true,
                transmitter: true,
                receiver: true,
            },
        });

        await this.prisma.$disconnect();

        return { roomID: room.id, message: result.message };
    }

    async removeMessage(roomID: number, messageID: number) {
        const room = await this.checking(roomID);

        if (room === null) {
            return { result: false };
        }

        await this.prisma.messege.delete({
            where: {
                id: messageID,
            },
        });

        await this.prisma.$disconnect();

        return { result: true };
    }

    async getAllChattingRoom(count: number, page: number, nickname: string) {
        const maxParam = await this.prisma.chattingRoom.count({
            where: {
                users: {
                    some: {
                        nickname,
                    },
                },
            },
        });

        const result = await this.prisma.chattingRoom.findMany({
            take: count,
            skip: (page - 1) * count,
            where: {
                users: {
                    some: {
                        nickname,
                    },
                },

                // messages: {
                //     every: {
                //         AND: { read: false },
                //     },
                // },
            },
            select: {
                id: true,
                users: {
                    select: {
                        nickname: true,
                    },
                },
                messages: {
                    // TODO: read가 false 인 메시지만 가져와야함
                },
                // messages: {
                //     take: 1,
                //     orderBy: {
                //         createdAt: "desc",
                //     },

                // },
            },
        });

        await this.prisma.$disconnect();
        console.log(result);
        const rooms = result.reduce((prev, curr) => {
            return {
                ...prev,
                [curr.id]: curr,
            };
        }, {});
        return { maxParam, rooms };
    }

    async checking(roomID: number) {
        const result = await this.prisma.chattingRoom.findFirst({
            where: {
                id: roomID,
            },
            select: {
                id: true,
            },
        });

        return result;
    }
}

export default new Chatting();
