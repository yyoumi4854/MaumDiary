import { atom } from "recoil";

import { USER } from "@/constant/RECOIL_KEY";
import { USER_DATA } from "@/types";

export const userAtom = atom<null | USER_DATA>({
    key: USER.USER_DATA,
    default: null,
});
