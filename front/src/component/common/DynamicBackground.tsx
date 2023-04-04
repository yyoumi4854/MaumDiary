import { useState, useEffect } from "react";

import { Period } from "@/types";

import * as Style from "@/style/common/DynamicBackground-style";

import CloudSVG from "@/images/cloud.svg";

interface Props {
    period: Period;
}

const getOffset = () => {
    const offset = Math.floor(((Math.random() * window.innerWidth) / window.innerWidth) * 100);

    return Math.min(
        offset,
        ((Math.random() * (window.innerWidth - 141)) / window.innerWidth) * 100
    );
};

const DynamicBackground = ({ period }: Props) => {
    const [OffestList, setOffsetList] = useState(() => {
        return Array(Math.trunc(window.innerHeight / 120)) // 160
            .fill(undefined)
            .map(getOffset);
    });

    useEffect(() => {
        const mover = requestAnimationFrame(() => {
            setOffsetList((prev) => {
                return prev.map((offset) => {
                    const newOffset = offset + Math.random() * 0.01; // 0.01

                    if (newOffset >= 100) {
                        // return Math.random() * -1;

                        return -((141 / window.innerWidth) * 100);
                    }

                    return newOffset;
                });
            });
        });

        return () => cancelAnimationFrame(mover);
    });

    return (
        <Style.Background>
            {OffestList.map((offset, idx) => {
                return (
                    <Style.Lane key={idx}>
                        {period !== "evening" ? (
                            <Style.Cloud style={{ left: `${offset}%` }} bg={period !== "afternoon"}>
                                <img src={CloudSVG} alt="구름" />
                            </Style.Cloud>
                        ) : (
                            <Style.Star style={{ left: `${offset}%` }}>
                                <span></span>
                                <span></span>
                                <span></span>
                            </Style.Star>
                        )}
                    </Style.Lane>
                );
            })}
        </Style.Background>
    );
};

export default DynamicBackground;
