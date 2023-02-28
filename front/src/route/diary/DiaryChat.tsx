import Chat from "@/component/diaryChat/Chat";
import ChatList from "./../../component/diaryChat/ChatList";

import { DiaryChatContent } from "@/style/component/diaryChat/DiaryChat-style";

const DiaryChat = () => {
    return (
        <DiaryChatContent>
            <ChatList />
            <Chat />
        </DiaryChatContent>
    );
};

export default DiaryChat;
