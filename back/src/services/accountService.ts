import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";
import AppError from "../lib/AppError";
import { generateToken } from "../lib/token";
import userService from "./userService";
import tokenService from "./tokenService";
import certificationService from "./certificationService";
import { isInvalidEmail } from "../lib/util";

interface UserData {
    nickname: string;
    email: string;
    userID: string;
    password: string;
}

class AccountService {
    prisma = new PrismaClient();

    async register(userData: UserData) {
        const { nickname, email, userID, password } = userData;

        if (isInvalidEmail(email) === true) {
            throw new AppError("InvalidEmailFormatError");
        }

        if (password.length > 7) return { ok: false };

        const paswordHash = await bcrypt.hash(password, 10);

        await userService.create(nickname, email, userID, paswordHash);

        await this.prisma.$disconnect();

        return { ok: true };
    }

    async login(userID: string, password: string) {
        const user = await this.prisma.account.findUnique({
            where: {
                userID: userID,
            },
            select: {
                password: true,
                User: {
                    select: {
                        blocking: true,
                    },
                },
            },
        });

        // 유저가 가입한 적이 없을때
        if (user === null) {
            return null;
        }

        // 차단당한 계정이거나 혹은 탈퇴된 계정일때
        if (user.User.blocking === true) {
            return null;
        }

        const result = await bcrypt.compare(password, user.password);

        if (!result) {
            return null;
        }

        const accessToken = generateToken("access", userID);
        let refreshToken = null;

        const getRefreshToken = await tokenService.getRefreshToken(userID);

        if (getRefreshToken !== null) {
            refreshToken = await tokenService.updateRefreshToken(userID);
        } else {
            refreshToken = await tokenService.addRefreshToken(userID);
        }

        this.prisma.$disconnect();

        return {
            accessToken,
            refreshToken,
        };
    }

    async logout(userID: string) {
        try {
            const result = await tokenService.removeRefreshToken(userID);

            return result;
        } catch (e: any) {
            throw new AppError("LogOutError");
        }
    }

    async getUserByUserID(userID: string) {
        const user = this.prisma.account.findUnique({
            where: {
                userID,
            },
            select: {
                certified_account: true,
                email: true,
                User: {
                    select: {
                        nickname: true,
                        id: true,
                    },
                },
            },
        });

        if (user === null) {
            return null;
        }

        return user;
    }

    async getUserByUserID_login(userID: string) {
        const user = this.prisma.account.findUnique({
            where: {
                userID,
            },
            select: {
                User: {
                    select: {
                        id: true,
                    },
                },
            },
        });

        if (user === null) {
            return null;
        }

        return user;
    }

    async getUserIDByCertification(email: string, code: string) {
        const result = await certificationService.certifyEmailByCode(email, code);

        if (result.ok !== true && !result.result) {
            return null;
        }

        const user = await this.prisma.account.findUnique({
            where: {
                email,
            },
            select: {
                userID: true,
            },
        });

        if (user === null) {
            return null;
        }

        await this.prisma.$disconnect();

        return user.userID;
    }

    async changePassword(userID: string, password: string) {
        try {
            const paswordHash = await bcrypt.hash(password, 10);

            await this.prisma.account.update({
                where: {
                    userID,
                },
                data: {
                    password: paswordHash,
                },
            });

            await this.prisma.$disconnect();

            return { ok: true };
        } catch (e: any) {
            throw new AppError("UnknownError");
        }
    }

    async certify(userID: string, isCertified: boolean) {
        try {
            await this.prisma.account.update({
                where: {
                    userID,
                },
                data: { certified_account: isCertified },
            });

            await this.prisma.$disconnect();

            return { ok: true };
        } catch (e: any) {
            throw new AppError("UnknownError");
        }
    }

    async check(target: "userID" | "nickname" | "email", value: string) {
        try {
            let result = null;

            if (target === "nickname") {
                const nicknameCondition = new RegExp(/^[가-힣\d\w\s]{2,8}$/);
                if (nicknameCondition.test(value) === false) return false;

                result = await this.prisma.user.findUnique({
                    where: {
                        nickname: value,
                    },
                });
            } else {
                if (target === "email") {
                    if (isInvalidEmail(value) === false) return false;
                } else {
                    // userID
                    if (value.length > 7) return false;
                }

                result = await this.prisma.account.findUnique({
                    where: {
                        [target]: value,
                    },
                });
            }

            if (result === null) {
                return true;
            }

            return false;
        } catch (e: unknown) {
            throw new AppError("UnknownError");
        }
    }

    // async getUserChatRoomsByUserModel(usermodel: string) {
    //     const result1 = await this.prisma.chat.findMany({
    //         where: {
    //             OR: [
    //                 {
    //                     inviter: String(usermodel),
    //                 },
    //                 {
    //                     invitee: String(usermodel),
    //                 },
    //             ],
    //         },
    //         select: {
    //             user_model_id: true,
    //             //count: 안읽은 메세지 추가 해야함
    //         },
    //     });
    //     if (result1 === null) {
    //         return null;
    //     }
    //     await this.prisma.$disconnect();

    //     return result1[0].user_model_id;
    // }
}

export default new AccountService();
