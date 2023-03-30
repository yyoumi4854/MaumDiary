import { useState, useEffect } from "react";

import { fetchSunriseAndSunset } from "@/api/openAPI";
import { useQuery } from "@tanstack/react-query";

import dayjs from "dayjs";
import { Period } from "@/types/";

// dawn: 새벽, morning: 오전, afternoon: 오후, evening: 저녁
const usePeriodOfDay = () => {
    const [period, setPeriod] = useState<Period | null>(null);

    const midnight = dayjs().hour(24).minute(0).second(0);

    const { status, data } = useQuery(
        ["DynamicBackground_SunriseAndSunset"],
        fetchSunriseAndSunset,
        {
            staleTime: midnight.diff(dayjs()),
        }
    );

    // 새벽 < 일출 < 오전 < 12시 < 오후 < 일몰 < 저녁 < 24 < 새벽
    useEffect(() => {
        const checker = setInterval(() => {
            if (status !== "success") {
                return null;
            }
            const numberedNow = Number(dayjs().format("HHmm"));

            if (numberedNow < data.sunrise) {
                setPeriod("dawn");
            } else if (numberedNow < 1200) {
                setPeriod("morning");
            } else if (numberedNow < data.sunset) {
                setPeriod("afternoon");
            } else {
                setPeriod("evening");
            }
        }, 1000);

        return () => clearInterval(checker);
    });

    return period;
};

export default usePeriodOfDay;
