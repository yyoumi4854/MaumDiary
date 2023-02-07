import instance from ".";
import { Diary, FetchingDiaryListOption } from "@/types";

export const fetchDiaryList = async ({
    user = "false",
    count = 10,
    page,
    emotion = "all",
    lock = "false",
}: FetchingDiaryListOption) => {
    const result = await instance.get<Diary[]>(
        `http://localhost:3002/api/diaries/all?user=${user}&count=${count}&page=${page}&emotion=${emotion}&lock=${lock}`,
        {
            withCredentials: true,
        }
    );

    return result.data;
};
