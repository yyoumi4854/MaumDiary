import { Emotion } from "@/types";
import { emotionIcon } from "@/utils/emotionIcon";

export const good = (EmotionData: Record<Emotion, number>) =>
    EmotionData.confidence + EmotionData.excitement + EmotionData.thanks + EmotionData.comfort;

export const bad = (EmotionData: Record<Emotion, number>) =>
    EmotionData.worry + EmotionData.sad + EmotionData.hurt + EmotionData.angry;

export const max = (EmotionData: Record<Emotion, number>) => {
    const max = Math.max(...Object.values(EmotionData));
    const maxEmotion: string[] = Object.entries(EmotionData)
        .filter((emotion) => emotion[1] === max)
        .map((list) => {
            const emotionName = list[0] as Emotion;
            return emotionIcon[emotionName].name;
        });

    return maxEmotion.length < 4 ? maxEmotion.join(" ") : "";
};

export const CHART_DATA = (currentEndDate: number, EmotionData: Record<Emotion, number>) => {
    return [
        {
            subject: "자신감",
            good: EmotionData.confidence,
            Bad: -10,
            fullMark: currentEndDate,
        },
        {
            subject: "신남",
            good: EmotionData.excitement,
            Bad: -10,
            fullMark: currentEndDate,
        },
        {
            subject: "감사",
            good: EmotionData.thanks,
            Bad: -10,
            fullMark: currentEndDate,
        },
        {
            subject: "편안",
            good: EmotionData.comfort,
            Bad: -10,
            fullMark: currentEndDate,
        },
        {
            subject: "불안",
            good: -10,
            Bad: EmotionData.worry,
            fullMark: currentEndDate,
        },
        {
            subject: "슬픔",
            good: -10,
            Bad: EmotionData.sad,
            fullMark: currentEndDate,
        },
        {
            subject: "상처",
            good: -10,
            Bad: EmotionData.hurt,
            fullMark: currentEndDate,
        },
        {
            subject: "분노",
            good: -10,
            Bad: EmotionData.angry,
            fullMark: currentEndDate,
        },
    ];
};
