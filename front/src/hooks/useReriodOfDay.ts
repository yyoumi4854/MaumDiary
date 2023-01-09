import { fetchSunriseAndSunset } from "@/api/openAPI";
import { useQuery } from "@tanstack/react-query";

import dayjs from "dayjs";

// dawn: 새벽, morning: 오전, afternoon: 오후, evening: 저녁
const usePeriodOfDay = () => {
    const midnight = dayjs().hour(24).minute(0).second(0);
    const now = dayjs();

    const { status, data } = useQuery(
        ["DynamicBackground_SunriseAndSunset"],
        fetchSunriseAndSunset,
        {
            staleTime: midnight.diff(now),
        }
    );

    if (status !== "success") {
        return null;
    }

    const numberedNow = Number(now.format("HHmm"));
    const sunrise = Number(data.sunrise);
    const sunset = Number(data.sunset);

    // 새벽 < 일출 < 오전 < 12시 < 오후 < 일몰 < 저녁 < 24 < 새벽
    if (numberedNow < sunrise) {
        return "dawn";
    } else if (numberedNow < 1200) {
        return "morning";
    } else if (numberedNow < sunset) {
        return "afternoon";
    } else {
        return "evening";
    }
};

export default usePeriodOfDay;
