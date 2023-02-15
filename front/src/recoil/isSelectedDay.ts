import { atom } from "recoil";

import { IS_SELECTED_DAY } from "./../constant/RECOIL_KEY";

export const isSelectedDayAtom = atom<boolean>({
    key: IS_SELECTED_DAY.IS_SELECTED_DAY,
    default: false,
});
