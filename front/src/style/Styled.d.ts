import "styled-components";
import * as ThemeType from "./Theme";

declare module "styled-components" {
    export interface DefaultTheme {
        colors: ThemeType.colorsType;
        fonts: ThemeType.fontsType;
        device: ThemeType.deviceType;
        common: ThemeType.commonType;
    }

    export interface TextStyle {
        lineHeight?: boolean; // 1줄: 1, 2줄이상: 1.5
        textAlign?: string;
    }

    export interface FormStyle {
        isButton?: boolean;
        warnning?: boolean;
        marginBottom?: string;
    }

    export interface UserFormStyle {
        marginTop?: string;
    }
}
