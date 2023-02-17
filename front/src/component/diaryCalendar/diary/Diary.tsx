import React from "react";
import { Diary as DiaryType } from "@/types";
import IsDiary from "./IsDiary";
import IsNoDiary from "./IsNoDiary";

interface Props {
    selectedDiary?: DiaryType;
}

const Diary = ({ selectedDiary }: Props) => {
    return <>{selectedDiary ? <IsDiary selectedDiary={selectedDiary} /> : <IsNoDiary />}</>;
};

export default Diary;
