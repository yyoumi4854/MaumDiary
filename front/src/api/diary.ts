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
    const result = await instance.get<{ [key: number]: Type.Diary }>(
        `/diaries/user/?year=${year}&month=${month}`
    );

    return result.data;
};

// 일기 작성
export const writeDiary = async ({
    title,
    description,
    weather,
    lock,
    createdAt,
}: Type.WriteDiary) => {
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
}: Type.EditorDiary) => {
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
export const deleteDiary = async ({ id }: Type.DeleteDiary) => {
    const result = await instance.delete(`/diaries/${id}`);

    return result;
};
