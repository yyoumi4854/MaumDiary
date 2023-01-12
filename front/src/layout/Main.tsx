import * as Style from "@/style/layout/Main-style";

import { Period } from "@/types";

import theme from "@/style/Theme";

interface Props {
    period: Period;
    children: React.ReactNode;
}

const ColorByPeriod = {
    dawn: theme.TimeGradient.dawn,
    morning: theme.TimeGradient.morning,
    afternoon: theme.TimeGradient.afternoon,
    evening: theme.TimeGradient.evening,
} as const;

const Main = ({ period, children }: Props) => {
    return <Style.MainContainer background={ColorByPeriod[period]}>{children}</Style.MainContainer>;
};

export default Main;
