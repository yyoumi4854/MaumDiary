import { QueryClient } from "@tanstack/react-query";
import { useLoaderData } from "react-router-dom";

import { Period } from "@/types";
import { DIARY } from "@/constant/QUERY_KEY";
import { fetchDiaryList } from "@/api/diary";
import GreetingSection from "@/component/GreetingSection";
import DiarySection from "@/component/DiarySection";

import * as Style from "@/style/page/Home-style";

interface Props {
    period: Period;
}

export const loader = (queryClient: QueryClient) => async () => {
    const query = {
        queryKey: [DIARY.LIST, { user: "true", count: 10, page: 1, emotion: "all", lock: "true" }],
        queryFn: () =>
            fetchDiaryList({ user: "false", count: 10, page: 1, emotion: "all", lock: "false" }),
    };

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
