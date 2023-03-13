// 회원 삭제
import instance from ".";

export const withdrawal = async () => {
    const result = await instance.delete(`/users/withdrawal`);

    return result;
};
