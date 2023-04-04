import { UserINFO } from "@/types";
import instance from ".";

// 닉네임 변경
export const saveNickname = async ({ nickname }: Pick<UserINFO, "nickname">) => {
    const result = await instance.patch(`/users/nickname`, { nickname });

    return result;
};

// 회원 삭제
export const withdrawal = async () => {
    const result = await instance.delete(`/users/withdrawal`);

    return result;
};
