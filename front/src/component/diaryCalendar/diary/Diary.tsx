import { Diary as DiaryType } from "@/types";
import IsDiary from "./IsDiary";
import IsNoDiary from "./IsNoDiary";

interface Props {
    selectedDiary?: DiaryType;
}

// div로 투명흰색박스 공용화하기 -> Diary-styled.ts 만들기
const Diary = ({ selectedDiary }: Props) => {
    return <>{selectedDiary ? <IsDiary selectedDiary={selectedDiary} /> : <IsNoDiary />}</>;
};

export default Diary;
