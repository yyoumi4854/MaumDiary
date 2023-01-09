import instance from ".";

export const fetchSunriseAndSunset = async () => {
    const endpoint =
        "https://apis.data.go.kr/B090041/openapi/service/RiseSetInfoService/getAreaRiseSetInfo";
    const serviceKey = import.meta.env.VITE_OPEN_API_KEY;
    const locdate = "20230105";
    const location = "서울";

    const URL = `${endpoint}?serviceKey=${serviceKey}&locdate=${locdate}&location=${location}`;

    const result = await instance.get(URL);
    const { sunrise, sunset } = result.data.response.body.items.item;

    return { sunrise, sunset };
};
