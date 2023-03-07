import { Diary, FetchingDiaryListOption, Period, PeriodDiary } from "@/types";
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

    return result.data;
};

// [마음분석]
// 일년 전, 한달 전,일주일전 일기를 다 가져오기
export const fetchPastDiary = async () => {
    const result = await instance.get<PeriodDiary>(`/diaries/period/all`);

    return result.data;
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
