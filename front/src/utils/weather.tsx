import { Weather } from "@/types";
import {
    BsSun,
    BsFillCloudSunFill,
    BsFillCloudyFill,
    BsFillCloudRainHeavyFill,
    BsSnow2,
} from "react-icons/bs";

export const weather: Record<Weather, JSX.Element> = {
    sunny: <BsSun />,
    cloudAndSun: <BsFillCloudSunFill />,
    cloudy: <BsFillCloudyFill />,
    rainy: <BsFillCloudRainHeavyFill />,
    snowy: <BsSnow2 />,
};
