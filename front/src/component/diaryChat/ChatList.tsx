import { Dispatch } from "react";
import * as Style from "@/style/component/diaryChat/ChatList-style";

interface Props {
    on: boolean;
    setOn: Dispatch<React.SetStateAction<boolean>>;
}

const ChatList = ({ on, setOn }: Props) => {
    const onClick = () => {
        setOn(true);
    };

    return (
        <Style.ChatListContent onChatting={on}>
            <Style.ListContent onClick={onClick}>
                <Style.ProfileContent>
                    <img src="" alt="프로필" />
                </Style.ProfileContent>

                <Style.TextContent>
                    <b>마음일기</b>
                    <p>
                        두줄 넘어가면... 만들기 두줄이 넘으려나....? 안넘네ㅋㅋㅋ넘어라 넘어라
                        넘어랏
                    </p>
                </Style.TextContent>

                <Style.BesidesContent>
                    <span>오후 12:30</span>
                    <span>1</span>
                </Style.BesidesContent>
            </Style.ListContent>
        </Style.ChatListContent>
    );
};

export default ChatList;
