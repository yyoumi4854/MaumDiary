import { atom, AtomEffect } from "recoil";

import { USER } from "@/constant/RECOIL_KEY";
import { USER_DATA } from "@/types";

const storageEffect: <T>(key: string) => AtomEffect<T> =
    (key) =>
    ({ setSelf, onSet }) => {
        const userData = localStorage.getItem(key);

        if (userData !== null) {
            setSelf(JSON.parse(userData));
        }

        onSet((newValue, _, isReset) => {
            isReset
                ? localStorage.removeItem(key)
                : localStorage.setItem(key, JSON.stringify(newValue));
        });
    };

export const userAtom = atom<null | USER_DATA>({
    key: USER.USER_DATA,
    default: null,
    effects: [storageEffect<null | USER_DATA>("user")],
});
