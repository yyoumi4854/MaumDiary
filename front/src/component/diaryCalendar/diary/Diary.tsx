import React from "react";
import { Diary as DiaryType } from "@/types";
import IsDiary from "./IsDiary";
import IsNoDiary from "./IsNoDiary";

type Props = {
    diarySelect: string;
    selectedDiary?: DiaryType;
};

const Diary = ({ diarySelect, selectedDiary }: Props) => {
    return (
        <>
            {selectedDiary ? (
                <IsDiary diarySelect={diarySelect} selectedDiary={selectedDiary} />
            ) : (
                <IsNoDiary diarySelect={diarySelect} />
            )}
        </>
    );
};

export default Diary;
