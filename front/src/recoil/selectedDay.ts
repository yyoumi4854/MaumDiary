import { atom } from "recoil";
import dayjs from "dayjs";

import { SELECTED_DAY } from "@/constant/RECOIL_KEY";

export const selectedDayAtom = atom<string>({
    key: SELECTED_DAY.SELETED_DAY_DATA,
    default: dayjs().format(`YYYYMMDD`),
});
