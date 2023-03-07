export interface USER_DATA {
    User: {
        nickname: string;
        id: string;
    };
    certified_account: boolean;
}

export type Period = "dawn" | "morning" | "afternoon" | "evening";

export type Emotion =
    | "confidence"
    | "excitement"
    | "thanks"
    | "comfort"
    | "worry"
    | "sad"
    | "hurt"
    | "angry";

export type Weather = "sunny" | "cloudAndSun" | "cloudy" | "rainy" | "snowy";

export interface Diary {
    id: number;
    title: string;
    description: string;
    emotion: Emotion;
    lock: boolean;
    likes: number;
    weather: Weather;
    createdAt: string;
    updatedAt: string;
    author: string;
}

export interface FetchingDiaryListOption {
    user: "true" | "false";
    count: number;
    page: number;
    emotion: "all" | Emotion;
    lock: "true" | "false";
}

export interface Send {
    email: string;
    target: "email" | "password";
}

export interface UserINFO {
    nickname: string;
    email: string;
    userID: string;
    password: string;
}

export interface Check {
    target: "email" | "nickname" | "userID";
    value: string;
}

export interface PeriodDiary {
    week: Pick<Diary, "id" | "createdAt" | "emotion">[];
    month: Pick<Diary, "id" | "createdAt" | "emotion">[];
    year: Pick<Diary, "id" | "createdAt" | "emotion">[];
}
