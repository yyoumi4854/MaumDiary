import instance from ".";
import { Diary, FetchingDiaryListOption } from "@/types";

export const fetchDiaryList = async ({
    user,
    count,
    page,
    emotion,
    lock,
}: FetchingDiaryListOption) => {
    const result = await instance.get<{ maxParam: number; diaryList: Diary[] }>(
        `http://localhost:3002/api/diaries/all?user=${user}&count=${count}&page=${page}&emotion=${emotion}&lock=${lock}`,
        {
            withCredentials: true,
        }
    );

    return {
        count,
        nextParam: page + 1,
        maxParam: result.data.maxParam,
        diaryList: result.data.diaryList,
    };
};
