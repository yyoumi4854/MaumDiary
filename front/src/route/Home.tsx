import { QueryClient } from "@tanstack/react-query";

import { Period } from "@/types";
import { DIARY } from "@/constant/QUERY_KEY";
import { fetchDiaryList } from "@/api/diary";
import GreetingSection from "@/component/GreetingSection";
import DiarySection from "@/component/DiarySection";

import * as Style from "@/style/page/Home-style";

interface Props {
    period: Period;
}

const getDiaryList = () => ({
    queryKey: [DIARY.LIST],
    queryFn: fetchDiaryList,
});

export const loader = (queryClient: QueryClient) => async () => {
    const query = getDiaryList();

    return queryClient.getQueryData(query.queryKey) ?? (await queryClient.fetchQuery(query));
};

const Home = ({ period }: Props) => {
    return (
        <Style.HomeContainer className="inner">
            <GreetingSection period={period} />
            <DiarySection />
        </Style.HomeContainer>
    );
};

export default Home;
