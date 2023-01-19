import * as Style from "@/style/common/Emotions-style";

import Emotion from "@/utils/emotionIcon";

const Emotions = () => {
    return (
        <Style.Container>
            <Style.TabButton>
                <Style.Circle url={"none"} />
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
                <Style.Circle url={Emotion.comport} />
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
        </Style.Container>
    );
};

export default Emotions;
