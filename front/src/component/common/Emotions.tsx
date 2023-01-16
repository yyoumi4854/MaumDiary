import * as Style from "@/style/common/Emotions-style";

import confidence from "@/images/emotion/confidence.svg";
import excitement from "@/images/emotion/excitement.svg";
import thanks from "@/images/emotion/thanks.svg";
import comport from "@/images/emotion/comport.svg";
import worry from "@/images/emotion/worry.svg";
import sad from "@/images/emotion/sad.svg";
import hurt from "@/images/emotion/hurt.svg";
import angry from "@/images/emotion/angry.svg";

const Emotions = () => {
    return (
        <Style.Container>
            <Style.TabButton>
                <Style.Circle url={"none"} />
                <p>전체</p>
            </Style.TabButton>
            <Style.TabButton>
                <Style.Circle url={confidence} />
                <p>자신감</p>
            </Style.TabButton>
            <Style.TabButton>
                <Style.Circle url={excitement} />
                <p>신남</p>
            </Style.TabButton>
            <Style.TabButton>
                <Style.Circle url={thanks} />
                <p>감사</p>
            </Style.TabButton>
            <Style.TabButton>
                <Style.Circle url={comport} />
                <p>편안</p>
            </Style.TabButton>
            <Style.TabButton>
                <Style.Circle url={worry} />
                <p>불안</p>
            </Style.TabButton>
            <Style.TabButton>
                <Style.Circle url={sad} />
                <p>슬픔</p>
            </Style.TabButton>
            <Style.TabButton>
                <Style.Circle url={hurt} />
                <p>상처</p>
            </Style.TabButton>
            <Style.TabButton>
                <Style.Circle url={angry} />
                <p>분노</p>
            </Style.TabButton>
        </Style.Container>
    );
};

export default Emotions;
