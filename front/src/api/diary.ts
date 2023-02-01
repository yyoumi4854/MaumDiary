import instance from ".";
import { Diary, FetchingDiaryListOption } from "@/types";

export const fetchDiaryList = async ({
    user,
    count,
    page,
    emotion,
    lock,
}: FetchingDiaryListOption) => {
    const result = await instance.get<Diary[]>(
        `http://localhost:3002/api/diaries/all?user=${user}&count=${count}&page=${page}&emotion=${emotion}&lock=${lock}`
    );

    return result.data;
};
