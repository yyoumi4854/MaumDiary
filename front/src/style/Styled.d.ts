import "styled-components";
import * as ThemeType from "./Theme";

declare module "styled-components" {
    export interface DefaultTheme {
        colors: ThemeType.colorsType;
        fonts: ThemeType.fontsType;
        device: ThemeType.deviceType;
        common: ThemeType.commonType;
    }
}
