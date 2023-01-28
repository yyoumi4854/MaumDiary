import { useRecoilValue } from "recoil";
import { BsChevronRight } from "react-icons/bs";

import { Period } from "@/types";
import { userAtom } from "@/recoil/user";
import Logo from "@/component/common/Logo";

import * as Style from "@/style/component/GreetingSection-style";

interface Props {
    period: Period;
}
// div
// span => h2
// div => p
// div

// link도 div로 묶기
const GreetingSection = ({ period }: Props) => {
    const user = useRecoilValue(userAtom);

    return (
        <Style.GreetingSection>
            <Style.Greeting>
                <Logo />
                <Style.GreetingMessage white={period === "evening"}>
                    {user === null ? (
                        <>
                            <h2>나의 하루 한줄 마음 기록하기</h2>
                            <p>
                                마음일기는 하루 하루 자신의 감정을 기록하고 <br />
                                사람들과 마음을 나눌 수 있는 서비스 입니다.
                            </p>
                            <Style.GreetingBottom>
                                <Style.QuickLink to="/login">
                                    로그인
                                    <BsChevronRight />
                                </Style.QuickLink>
                                <Style.QuickLink to="#">
                                    회원가입
                                    <BsChevronRight />
                                </Style.QuickLink>
                            </Style.GreetingBottom>
                        </>
                    ) : (
                        <>
                            <h2>{"겨울감자"}님,</h2>
                            <p>
                                어떤 하루를 보내셨나요? <br />
                                오늘의 마음을 기록해 보세요!
                            </p>
                            <Style.GreetingBottom>
                                <Style.QuickLink to="#">
                                    오늘 일기 쓰기
                                    <BsChevronRight />
                                </Style.QuickLink>
                            </Style.GreetingBottom>
                        </>
                    )}
                </Style.GreetingMessage>
            </Style.Greeting>
        </Style.GreetingSection>
    );
};

export default GreetingSection;
