import { useState, useRef, useEffect, MouseEvent } from "react";
import { useInfiniteQuery } from "@tanstack/react-query";

import { Emotion } from "@/types";
import { DIARY } from "@/constant/QUERY_KEY";
import { fetchDiaryList } from "@/api/diary";
import Emotions from "./common/Emotions";
import DiaryItem from "./DiaryItem";
import Loding from "./common/Loading";

import * as Style from "@/style/component/DiarySection-style";

const DiarySection = () => {
    const [selectedEmotion, setSelectedEmotion] = useState<"all" | Emotion>("all");

    const observedDivRef = useRef<HTMLDivElement | null>(null);

    const { data, fetchNextPage, hasNextPage, status, isFetchingNextPage } = useInfiniteQuery(
        [DIARY.LIST, selectedEmotion],
        ({ pageParam = 1 }) =>
            fetchDiaryList({
                user: "false",
                count: 4,
                page: pageParam,
                emotion: selectedEmotion,
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

    useEffect(() => {
        if (observedDivRef.current === null || hasNextPage === false) return;

        const observedDiv = observedDivRef.current;

        const observer = new IntersectionObserver(
            ([element]) => {
                if (element.isIntersecting) {
                    fetchNextPage();
                }
            },
            {
                threshold: 0.3,
            }
        );

        observer.observe(observedDiv);

        return () => observer.unobserve(observedDiv);
    }, [hasNextPage]);

    if (status !== "success") {
        return null;
    }

    const onClick = (e: MouseEvent<HTMLButtonElement>) => {
        const { name } = e.currentTarget as unknown as { name: Emotion };

        setSelectedEmotion(() => name);
    };

    return (
        <Style.Container>
            <Style.Title>
                <h2>마음 일기</h2>
                <p>
                    사람들이 어떠한 마음을 가지고 있는지
                    <br className="mobile" /> 카테고리 별로 알아보아요.
                </p>
            </Style.Title>
            <Emotions onClick={onClick} />

            {data.pages.map((page) =>
                page.diaryList.map((diary, idx) => <DiaryItem key={idx} diary={diary} />)
            )}
            {isFetchingNextPage && <Loding />}
            <div ref={observedDivRef}>이거 보면 무려 다음 페이지가 불러와짐</div>
        </Style.Container>
    );
};

export default DiarySection;
