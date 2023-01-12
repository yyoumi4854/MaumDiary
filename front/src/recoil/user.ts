import { atom } from "recoil";

import { USER } from "@/constant/RECOIL_KEY";

export const userAtom = atom({
    key: USER.USER_DATA,
    default: null,
});
