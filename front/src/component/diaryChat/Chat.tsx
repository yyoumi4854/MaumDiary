import { Dispatch, FormEvent, useRef, useState } from "react";
import { BsArrowLeft } from "react-icons/bs";

import * as ButtonStyle from "@/style/common/Button-style";
import * as Style from "@/style/component/diaryChat/Chat-style";
import * as ChattingStyle from "@/style/component/diaryChat/Chatting-style";

interface Props {
    setOn: Dispatch<React.SetStateAction<boolean>>;
}

const Chat = ({ setOn }: Props) => {
    const textInputRef = useRef<HTMLDivElement>(null);

    const [text, setText] = useState("");

    const onSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!textInputRef.current) return;

        setText(textInputRef.current.innerText);
        textInputRef.current.innerText = "";
    };

    return (
        <Style.ChatContent>
            <Style.TopContent>
                <button onClick={() => setOn(false)}>
                    <BsArrowLeft />
                </button>
                <p>마음일기</p>
            </Style.TopContent>

            <Style.chattingWrap>
                <Style.ChattingContent>
                    {Array(40)
                        .fill(null)
                        .map((_, idx) => (
                            // <div key={idx}>채팅내용들{idx}</div>
                            <ChattingStyle.Chatting to={"on"} key={idx}>
                                <div className="profile">
                                    <img src="" alt="프로필" />
                                </div>

                                <div>
                                    <b>마음일기</b>
                                    <p>
                                        채팅내용...ㅎ <br />
                                        내용 더쓰기
                                    </p>
                                </div>
                                <span>오후 2: 38</span>
                            </ChattingStyle.Chatting>
                        ))}

                    <ChattingStyle.DayLine>
                        <p>2023년 02월 28일</p>
                    </ChattingStyle.DayLine>

                    <ChattingStyle.Chatting to={"on"}>
                        <div className="profile">
                            <img src="" alt="프로필" />
                        </div>

                        <div>
                            <b>마음일기</b>
                            <p>
                                채팅내용...ㅎ <br />
                                내용 더쓰기
                            </p>
                        </div>
                        <span>오후 2: 38</span>
                    </ChattingStyle.Chatting>

                    <ChattingStyle.Chatting to={"emit"}>
                        <div>
                            <p>{text}</p>
                        </div>
                        <span>오후 2: 38</span>
                    </ChattingStyle.Chatting>
                </Style.ChattingContent>

                <Style.InputContentForm onSubmit={onSubmit}>
                    <div contentEditable ref={textInputRef}></div>
                    <ButtonStyle.SmallButton>전송</ButtonStyle.SmallButton>
                </Style.InputContentForm>
            </Style.chattingWrap>
        </Style.ChatContent>
    );
};

export default Chat;
