import instance from ".";
import { Diary } from "@/types";

export const fetchDiaryList = async () => {
    const result = await instance.get<Diary[]>(
        "http://localhost:3002/api/diaries/all?count=10&page=1&emotion=all&privatediary=false"
    );

    return result.data;
};
