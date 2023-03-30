import { Outlet } from "react-router-dom";

import Header from "@/layout/header/Header";
import Footer from "@/layout/footer/Footer";
import { Period } from "@/types";
import TopButton from "./TopButton";

import * as Style from "@/style/layout/Main-style";

import theme from "@/style/Theme";

interface Props {
    period: Period;
}

const ColorByPeriod = {
    dawn: theme.TimeGradient.dawn,
    morning: theme.TimeGradient.morning,
    afternoon: theme.TimeGradient.afternoon,
    evening: theme.TimeGradient.evening,
} as const;

const Main = ({ period }: Props) => {
    return (
        <Style.MainContainer background={ColorByPeriod[period]} period={period}>
            <div>
                <Header />
                <Outlet context={period} />
                <Footer />
                <TopButton />
            </div>
        </Style.MainContainer>
    );
};

export default Main;
