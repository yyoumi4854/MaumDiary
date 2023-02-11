import { useRef, useEffect, MouseEvent } from "react";
import { useLoaderData } from "react-router-dom";
import { useInfiniteQuery } from "@tanstack/react-query";

import { Diary } from "@/types";
import { DIARY } from "@/constant/QUERY_KEY";
import { fetchDiaryList } from "@/api/diary";
import Emotions from "./common/Emotions";
import DiaryItem from "./DiaryItem";

import * as Style from "@/style/component/DiarySection-style";

const DiarySection = () => {
    // const divRef = useRef<HTMLDivElement | null>(null);
    // const { diaryList } = useLoaderData() as { maxPageParam: number; diaryList: Diary[] };

    const diaryContainerRef = useRef<HTMLDivElement | null>(null);

    const { data, fetchNextPage, hasNextPage, status, isFetchingNextPage } = useInfiniteQuery(
        [DIARY.LIST],
        ({ pageParam = 1 }) =>
            fetchDiaryList({
                user: "false",
                count: 4,
                page: pageParam,
                emotion: "all",
                lock: "false",
            }),
        {
            getNextPageParam: (lastPage, allPages) => {
                return allPages.length * lastPage.count < lastPage.maxParam
                    ? lastPage.nextParam
                    : undefined;
            },
            staleTime: 60 * 1000,
        }
    );

    // useEffect(() => {
    //     if (divRef.current === null) return;

    //     // const sample = divRef.current;

    //     // if (hasNextPage === false) return;
    //     // const observer = new IntersectionObserver(
    //     //     ([element]) => {
    //     //         if (element.isIntersecting) {
    //     //             console.log("무려 실행이 됨");
    //     //             fetchNextPage();
    //     //         }
    //     //     },
    //     //     {
    //     //         threshold: 0,
    //     //     }
    //     // );

    //     // observer.observe(sample);

    //     // return () => observer.unobserve(sample);
    // }, [fetchNextPage]);

    const onScroll = () => {
        if (diaryContainerRef.current === null || hasNextPage === false) return;

        const { scrollHeight, clientHeight, scrollTop } = diaryContainerRef.current;

        if (scrollTop / (scrollHeight - clientHeight) >= 0.7) {
            fetchNextPage();
        }
    };

    if (status !== "success") {
        return null;
    }

    return (
        <Style.Container>
            <Style.Title>
                <h2>마음 일기</h2>
                <p>사람들이 어떠한 마음을 가지고 있는지 카테고리 별로 알아보아요.</p>
            </Style.Title>
            <Emotions />

            <Style.DiaryContainer ref={diaryContainerRef} onScroll={onScroll}>
                {data.pages.map((page) =>
                    page.diaryList.map((diary, idx) => <DiaryItem key={idx} diary={diary} />)
                )}
                {isFetchingNextPage && <div>무려 로 딩 중 임</div>}
            </Style.DiaryContainer>
        </Style.Container>
    );
};

export default DiarySection;
