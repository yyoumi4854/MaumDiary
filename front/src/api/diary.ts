import { Diary, FetchingDiaryListOption } from "@/types";
import dayjs from "dayjs";
import instance from ".";

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

// [캘린더]
// 유저가 쓴 일기를 달 단위로 조회
export const fetchMonthDiaryList = async ({ year, month }: { year: number; month: number }) => {
    const result = await instance.get<{ [key: number]: Diary }>(
        `/diaries/user/?year=${year}&month=${month}`
    );

    // return result.data;
    const currentDate = dayjs().year(year).month(month);

    return {
        [currentDate.format("yyyy-mm")]: result.data,
        nextMonth: currentDate.add(1, "month"),
        prevMonth: currentDate.subtract(1, "month"),
    };
};

// 일기 작성
export const writeDiary = async ({
    title,
    description,
    weather,
    lock,
    createdAt,
}: Omit<Diary, "id" | "emotion" | "likes" | "updatedAt" | "author">) => {
    const result = await instance.post("/diaries", {
        title,
        description,
        weather,
        lock,
        createdAt,
    });

    return result;
};

// 일기 수정
export const editorDiary = async ({
    id,
    title,
    description,
    weather,
    emotion,
    lock,
}: Omit<Diary, "likes" | "createdAt" | "updatedAt" | "author">) => {
    const result = await instance.patch(`/diaries/${id}`, {
        title,
        description,
        weather,
        emotion,
        lock,
    });

    return result;
};

// 일기 삭제
export const deleteDiary = async ({ id }: Pick<Diary, "id">) => {
    const result = await instance.delete(`/diaries/${id}`);

    return result;
};
