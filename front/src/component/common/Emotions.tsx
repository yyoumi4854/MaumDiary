import { MouseEvent, useRef, useState, startTransition } from "react";

import * as Style from "@/style/common/Emotions-style";

import faviconLogo from "@/images/favicon-logo.svg";
import Emotion from "@/utils/emotionIcon";

interface Props {
    onClick: (e: MouseEvent<HTMLButtonElement>) => void;
}

const Emotions = ({ onClick }: Props) => {
    const tabRef = useRef<HTMLDivElement | null>(null);
    const [left, setLeft] = useState(0);

    const onScroll = () => {
        startTransition(() => {
            if (tabRef.current === null) return;

            setLeft(
                (tabRef.current.scrollLeft /
                    (tabRef.current.scrollWidth - tabRef.current.clientWidth)) *
                    50
            );
        });
    };

    return (
        <div>
            <Style.Tab ref={tabRef} onScroll={onScroll}>
                <Style.TabButton name="all" onClick={onClick}>
                    <Style.Circle url={faviconLogo} />
                    <p>전체</p>
                </Style.TabButton>
                <Style.TabButton name="confidence" onClick={onClick}>
                    <Style.Circle url={Emotion.confidence} />
                    <p>자신감</p>
                </Style.TabButton>
                <Style.TabButton name="excitement" onClick={onClick}>
                    <Style.Circle url={Emotion.excitement} />
                    <p>신남</p>
                </Style.TabButton>
                <Style.TabButton name="thanks" onClick={onClick}>
                    <Style.Circle url={Emotion.thanks} />
                    <p>감사</p>
                </Style.TabButton>
                <Style.TabButton name="comfort" onClick={onClick}>
                    <Style.Circle url={Emotion.comfort} />
                    <p>편안</p>
                </Style.TabButton>
                <Style.TabButton name="worry" onClick={onClick}>
                    <Style.Circle url={Emotion.worry} />
                    <p>불안</p>
                </Style.TabButton>
                <Style.TabButton name="sad" onClick={onClick}>
                    <Style.Circle url={Emotion.sad} />
                    <p>슬픔</p>
                </Style.TabButton>
                <Style.TabButton name="hurt" onClick={onClick}>
                    <Style.Circle url={Emotion.hurt} />
                    <p>상처</p>
                </Style.TabButton>
                <Style.TabButton name="angry" onClick={onClick}>
                    <Style.Circle url={Emotion.angry} />
                    <p>분노</p>
                </Style.TabButton>
            </Style.Tab>

            <Style.ScrollIndicator left={left} />
        </div>
    );
};

export default Emotions;
