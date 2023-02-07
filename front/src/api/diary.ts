import instance from ".";
import * as Type from "@/types";

export const fetchDiaryList = async ({
    user,
    count,
    page,
    emotion,
    lock,
}: Type.FetchingDiaryListOption) => {
    const result = await instance.get<Type.Diary[]>(
        `/diaries/all?user=${user}&count=${count}&page=${page}&emotion=${emotion}&lock=${lock}`
    );

    return result.data;
};

// [캘린더]
// 유저가 쓴 일기를 달 단위로 조회
export const fetchMonthDiaryList = async ({ year, month }: Type.FectchMonthDiaryList) => {
    const result = await instance.get(`/diaries/user/?year=${year}&month=${month}`);

    return result.data;
};
