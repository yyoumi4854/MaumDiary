import instance from ".";

interface Diary {
    id: number;
    title: string;
    description: string;
    emotion: string;
    view: number;
    user_model_id: number;
    private: boolean;
    updatedAt: string;
}

export const fetchDiaryList = async () => {
    const result = await instance.get<Diary[]>(
        "http://localhost:3002/api/diaries/all?count=10&page=1&emotion=all&privatediary=false"
    );

    return result.data;
};
