import Chart from "@/component/diaryUserAnalysis/Chart";
import PastEmotion from "@/component/diaryUserAnalysis/PastEmotion";

import { DiaryUserAnalysisContent } from "@/style/page/diary/DiaryUserAnalysis-style";

const DiaryUserAnalysis = () => {
    return (
        <DiaryUserAnalysisContent>
            <Chart />
            <PastEmotion />
        </DiaryUserAnalysisContent>
    );
};

export default DiaryUserAnalysis;
