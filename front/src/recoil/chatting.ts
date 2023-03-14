import { atom, selector } from "recoil";
import { Chatting } from "@/constant/RECOIL_KEY";

const unreadAtom = atom({
    key: Chatting.UNREAD,
    default: 0,
});

export const unreadSelector = selector({
    key: Chatting.UNREAD_SELECTOR,
    get: ({ get }) => get(unreadAtom),
    set: ({ get, set }, newValue) => {
        const prevUnread = get(unreadAtom);

        if (typeof newValue === "number") {
            set(unreadAtom, prevUnread + newValue);
        } else {
            set(unreadAtom, newValue);
        }
    },
});

export const selectedRoomIDAtom = atom({
    key: Chatting.SELECTED_ROOMID,
    default: 0,
});
