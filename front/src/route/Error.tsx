import { useNavigate } from "react-router-dom";

import Logo from "./../component/common/Logo";
import { Period } from "@/types";

import theme from "@/style/Theme";
import * as ButtonStyle from "@/style/common/Button-style";
import * as TextStyle from "@/style/common/Text-style";
import * as Style from "@/style/page/Error-style";

interface Props {
    period: Period;
}

const ColorByPeriod = {
    dawn: theme.TimeGradient.dawn,
    morning: theme.TimeGradient.morning,
    afternoon: theme.TimeGradient.afternoon,
    evening: theme.TimeGradient.evening,
} as const;

const Error = ({ period }: Props) => {
    const navigate = useNavigate();

    return (
        <Style.ErrorContent background={ColorByPeriod[period]}>
            <Style.TextContent>
                <Logo />
                <TextStyle.TitleText>페이지 오류 안내</TextStyle.TitleText>
                <p>
                    홈페이지 이용에 불편을 드려 죄송합니다.
                    <br />
                    신속히 해결하도록 하겠습니다.
                </p>
                <ButtonStyle.MediumButton hover={true} onClick={() => navigate("/")}>
                    메인으로 이동
                </ButtonStyle.MediumButton>
            </Style.TextContent>
        </Style.ErrorContent>
    );
};

export default Error;
