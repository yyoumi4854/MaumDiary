import { PrismaClient } from "@prisma/client";
import dayjs from "dayjs";
import AppError from "../lib/AppError";
import accountService from "./accountService";

class DiaryService {
    prisma = new PrismaClient();

    async writeDiary(
        userID: string,
        title: string,
        description: string,
        weather: string,
        emotion: string,
        lock: boolean,
        createdAt?: dayjs.Dayjs
    ) {
        try {
            const result = await accountService.getUserByUserID_login(userID);

            if (result === null) {
                throw new AppError("NotFindError");
            }

            await this.prisma.diary.create({
                data: {
                    title,
                    description,
                    weather,
                    emotion,
                    user: {
                        connect: {
                            id: result.User.id,
                        },
                    },
                    lock,
                    createdAt: createdAt?.toDate(),
                },
            });
        } catch (error) {
            throw new AppError("NotFindError");
        }

        await this.prisma.$disconnect();
        return { result: true };
    }

    async getDiaryList(count: number, page: number, lock: boolean, emotion: string) {
        const maxParam = await this.prisma.diary.count({
            where: {
                lock,
            },
        });

        const result = await this.prisma.diary.findMany({
            take: count,
            skip: (page - 1) * count,
            where: {
                emotion: emotion != "all" ? emotion : undefined,
                lock: lock,
            },
            select: {
                id: true,
                title: true,
                description: true,
                emotion: true,
                lock: true,
                likes: true,
                weather: true,
                createdAt: true,
                updatedAt: true,
                author: true,
            },
            orderBy: [{ updatedAt: "desc" }],
        });

        if (result === null) {
            throw new AppError("NotFindError");
        }

        await this.prisma.$disconnect();

        return { maxParam, diaryList: result };
    }

    async getUserDiaryList(userID: string, count: number, page: number) {
        const max_count = await this.prisma.diary.count({
            where: {
                user: {
                    Account: {
                        userID: userID,
                    },
                },
            },
        });
        const diaryList = await this.prisma.diary.findMany({
            take: Number(count),
            skip: (Number(page) - 1) * Number(count),

            where: {
                user: {
                    Account: {
                        userID: userID,
                    },
                },
            },
            select: {
                id: true,
                title: true,
                description: true,
                emotion: true,
                likes: true,
                createdAt: true,
                updatedAt: true,
                lock: true,
            },
            orderBy: [{ createdAt: "desc" }],
        });

        if (diaryList === null) {
            throw new AppError("NotFindError");
        }
        await this.prisma.$disconnect();
        return { diaryList, max_count };
    }

    //달 단위로 일기를 가져오기 (일 과 일기가 key value로 매칭되어 있음)
    async getUserDiaryListByMonth(userID: string, year: number, month: number) {
        const day = dayjs()
            .year(year)
            .month(month - 1);

        const result = await this.prisma.diary.findMany({
            where: {
                user: {
                    Account: {
                        userID: userID,
                    },
                },
                createdAt: {
                    gt: day.subtract(1, "month").endOf("month").toISOString(),
                    lte: day.endOf("month").toISOString(),
                },
            },
        });

        await this.prisma.$disconnect();

        return result.reduce((prev, curr) => {
            const key = dayjs(curr.createdAt).date();

            return {
                ...prev,
                [key]: curr,
            };
        }, {});
    }

    // 주기별로 일기를 가져오기
    async getDiaryByPeriod(userID: string, day: dayjs.Dayjs) {
        const result = await this.prisma.diary.findMany({
            where: {
                user: {
                    Account: {
                        userID: userID,
                    },
                },
                createdAt: {
                    gte: day.startOf("date").toISOString(),
                    lte: day.endOf("date").toISOString(),
                },
            },
            select: {
                id: true,
                createdAt: true,
                emotion: true,
            },
        });
        if (result === null) {
            throw new AppError("NotFindError");
        }
        await this.prisma.$disconnect();

        return result;
    }

    async getDiary(id: number) {
        const postData = await this.prisma.diary.findUnique({
            where: { id },
        });
        if (postData === null) {
            throw new AppError("NotFindError");
        }
        await this.prisma.$disconnect();
        return postData;
    }

    async updateDiary(
        id: number,
        title: string,
        description: string,
        weather: string,
        emotion: string,
        lock: boolean
    ) {
        const postUpdate = await this.prisma.diary.update({
            where: { id },
            data: { title, description, weather, emotion, lock: lock },
        });
        if (postUpdate === null) {
            throw new AppError("NotFindError");
        }
        await this.prisma.$disconnect();
        return postUpdate;
    }

    async deleteDiary(id: number) {
        try {
            await this.prisma.diary.delete({
                where: { id },
            });
        } catch (error) {
            throw new AppError("NotFindError");
        }

        await this.prisma.$disconnect();
        return { result: true };
    }

    async addLikes(id: number, amount: number) {
        try {
            await this.prisma.diary.update({
                where: {
                    id,
                },
                data: {
                    likes: {
                        increment: amount,
                    },
                },
            });
        } catch (error) {
            throw new AppError("NotFindError");
        }

        await this.prisma.$disconnect();
        return { result: true };
    }
}

export default new DiaryService();
