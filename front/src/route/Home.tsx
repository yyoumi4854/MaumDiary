import { Period } from "@/types";

import GreetingSection from "@/component/GreetingSection";
import DiarySection from "@/component/DiarySection";

import * as Style from "@/style/page/Home-style";

interface Props {
    period: Period;
}

const Home = ({ period }: Props) => {
    return (
        <Style.HomeContainer className="inner">
            <GreetingSection period={period} />
            <DiarySection />
        </Style.HomeContainer>
    );
};

export default Home;
