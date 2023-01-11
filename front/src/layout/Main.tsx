import * as Style from "@/style/layout/Main-style";

import theme from "@/style/Theme";
import usePeriodOfDay from "@/hooks/useReriodOfDay";

interface Props {
    children: React.ReactNode;
}

const ColorByPeriod = {
    dawn: theme.TimeGradient.dawn,
    morning: theme.TimeGradient.morning,
    afternoon: theme.TimeGradient.afternoon,
    evening: theme.TimeGradient.evening,
} as const;

const Main = ({ children }: Props) => {
    const period = usePeriodOfDay();

    if (period === null) {
        return null;
    }

    return <Style.MainContainer background={ColorByPeriod[period]}>{children}</Style.MainContainer>;
};

export default Main;
