import { emotionIcon } from "@/utils/emotionIcon";

import * as Style from "@/style/page/Intro-style";
import * as TextStyle from "@/style/common/Text-style";

import intro1 from "@/images/intro1.png";
import intro2 from "@/images/intro2.png";
import intro3 from "@/images/intro3.png";

const Intro = () => {
    return (
        <div>
            <Style.TitleSection>
                <Style.TitleContent>
                    <TextStyle.TitleText>
                        나의
                        <br className="mobile" /> 하루 한줄 마음 기록하기
                    </TextStyle.TitleText>
                    <p>
                        마음 일기는 하루 하루 자신의 감정을 기록하고
                        <br />
                        사람들과 마음을 나눌 수 있는 서비스 입니다.
                    </p>

                    <Style.EmotionList>
                        {Object.values(emotionIcon).map((emotion, idx) => (
                            <li key={idx}>
                                <img src={emotion.icon} alt={emotion.name} />
                                <span>{emotion.name}</span>
                            </li>
                        ))}
                    </Style.EmotionList>
                </Style.TitleContent>
            </Style.TitleSection>

            <Style.IntroSection>
                <TextStyle.TitleText>
                    마음일기는
                    <br className="mobile" /> 이런 기능을 제공해요!
                </TextStyle.TitleText>

                <Style.IntroWrap url={intro1}>
                    <Style.IntroTextContent lineHeight={true}>
                        <strong>하나</strong>
                        <h3>
                            일기를 쓰면 <br />
                            AI가 그 날의 감정을
                            <br className="mobile" /> 분석해 주요!
                        </h3>
                        <p>
                            일기장 탭의 캘린더를 클릭하여
                            <br />
                            귀여운 7가지의 감정 이모티콘을 확인해 보세요.
                            <br />
                            지난 한 달간의 감정 결과와 일주일, 한 달, 일년 전
                            <br className="mobile" /> 오늘의 내 감정도 확인할 수 있어요.
                        </p>
                    </Style.IntroTextContent>
                    <span>첫번째 기능 이미지</span>
                </Style.IntroWrap>

                <Style.IntroWrap url={intro2}>
                    <Style.IntroTextContent lineHeight={true}>
                        <strong>둘</strong>
                        <h3>
                            다른 사람들과
                            <br />
                            감정을 공유할 수 있어요!
                        </h3>
                        <p>
                            전체 공개 글로 게시물을 작성하면
                            <br className="mobile" /> 다른 사람들도 글을 볼 수 있어요. <br />
                            마음이 맞는 사람과 대화 하면서 속마음을 털어놔 보세요.
                        </p>
                    </Style.IntroTextContent>
                    <span>두번째 기능 이미지</span>
                </Style.IntroWrap>

                <Style.IntroWrap url={intro3}>
                    <Style.IntroTextContent>
                        <strong>셋</strong>
                        <h3>익명성을 보장해요!</h3>
                        <p>
                            글을 공유해도 익명으로 공개되기 때문에
                            <br className="mobile" /> 속 시원하게 마음을 털어놔도 괜찮아요!
                            <br />
                            나만 보기로 글을 작성해보세요.
                        </p>
                    </Style.IntroTextContent>
                    <span>세번째 기능 이미지</span>
                </Style.IntroWrap>
            </Style.IntroSection>
        </div>
    );
};

export default Intro;
