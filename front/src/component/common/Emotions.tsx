import { useRef, useState, startTransition } from "react";

import * as Style from "@/style/common/Emotions-style";

import faviconLogo from "@/images/favicon-logo.svg";
import Emotion from "@/utils/emotionIcon";

const Emotions = () => {
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
        <Style.Container>
            <Style.Tab ref={tabRef} onScroll={onScroll}>
                <Style.TabButton>
                    <Style.Circle url={faviconLogo} />
                    <p>전체</p>
                </Style.TabButton>
                <Style.TabButton>
                    <Style.Circle url={Emotion.confidence} />
                    <p>자신감</p>
                </Style.TabButton>
                <Style.TabButton>
                    <Style.Circle url={Emotion.excitement} />
                    <p>신남</p>
                </Style.TabButton>
                <Style.TabButton>
                    <Style.Circle url={Emotion.thanks} />
                    <p>감사</p>
                </Style.TabButton>
                <Style.TabButton>
                    <Style.Circle url={Emotion.comfort} />
                    <p>편안</p>
                </Style.TabButton>
                <Style.TabButton>
                    <Style.Circle url={Emotion.worry} />
                    <p>불안</p>
                </Style.TabButton>
                <Style.TabButton>
                    <Style.Circle url={Emotion.sad} />
                    <p>슬픔</p>
                </Style.TabButton>
                <Style.TabButton>
                    <Style.Circle url={Emotion.hurt} />
                    <p>상처</p>
                </Style.TabButton>
                <Style.TabButton>
                    <Style.Circle url={Emotion.angry} />
                    <p>분노</p>
                </Style.TabButton>
            </Style.Tab>
            <Style.ScrollIndicator left={left} />
        </Style.Container>
    );
};

export default Emotions;
