import { useSetRecoilState } from "recoil";
import { useQuery } from "@tanstack/react-query";
import { Outlet } from "react-router-dom";

import { userAtom } from "@/recoil/user";
import { ACCOUNT } from "@/constant/QUERY_KEY";
import { fetchUserData } from "@/api/account";
import Header from "@/layout/header/Header";
import Footer from "@/layout/footer/Footer";
import { Period } from "@/types";
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
    const setUser = useSetRecoilState(userAtom);

    useQuery({
        queryKey: [ACCOUNT.USER],
        queryFn: fetchUserData,
        cacheTime: 0,
        retry: 0,
        enabled: localStorage.getItem("isLogin") !== null,
        onSuccess: (result) => {
            setUser(result.data);
        },
    });

    return (
        <Style.MainContainer background={ColorByPeriod[period]} period={period}>
            <div>
                <Header />
                <Outlet context={period} />
                <Footer />
            </div>
        </Style.MainContainer>
    );
};

export default Main;
