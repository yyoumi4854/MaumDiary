import { useState } from "react";

import Chat from "@/component/diaryChat/Chat";
import ChatList from "./../../component/diaryChat/ChatList";

import { DiaryChatContent } from "@/style/component/diaryChat/DiaryChat-style";

const DiaryChat = () => {
    const [on, setOn] = useState(false);
    // 상대방 선택 state만들기

    return (
        <DiaryChatContent>
            <ChatList on={on} setOn={setOn} />
            {on && <Chat setOn={setOn} />}
        </DiaryChatContent>
    );
};

export default DiaryChat;
