import { DefaultTheme } from "styled-components";
import { transparentize } from "polished";

export type colorsType = typeof colors;
export type fontsType = typeof fonts;
export type commonType = typeof common;
export type deviceType = typeof device;
export type backgroundTimeGradient = typeof TimeGradient;

const colors = {
    // main
    main: "#84B4FF",
    mainDeep: "#498FFF",
    mainDark: "#475367",

    // grey
    // greyText: "#9F9F9F",
    // greyBorder: "#D9D9D9",
    greyText: "#888",
    greyBorder: "#E1E1E1", // -> 나중에 #D9D9D로 바꿀예정
    greyBackground: "#F8F8F8",

    // background time
    afternoonCloud: "#FFF0C7",
    nightStar: "#FFF4BD",

    // emotion
    emotionConfidence: "#FED723",
    emotionExcitement: "#FEA723",
    emotionThanks: "#F8B7C9",
    emotionComfort: "#D4EDF9",
    emotionWorry: "#9EA2A7",
    emotionSad: "#87ABEB",
    emotionHurt: "#C9ADE2",
    emotionAngry: "#E25F50",

    // warnning, confirm
    warnning: "#FF8686",
    confirm: "#6CDA8B",
};

const fonts = {
    size: {
        basicsDesktop: "16px",
        // basicsTablet: "15px",
        basicsMobile: "14px",
        title: "2rem", // 32px
        middle: "1.5rem", // 24px
        small: ".9rem", // 14.4px
        xsmall: ".7rem", //11.2px
    },

    weight: {
        light: 300,
        medium: 500,
        bold: 700,
    },
};

const common = {
    flexCenter: `
        display: flex;
        justify-content: center;
        align-items: center;
    `,

    flexBetween: `
        display: flex;
        justify-content: space-between;
        align-items: center;
    `,

    positionCenter: `
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    `,

    positionXCenter: `
        position: absolute;
        top: 0;
        left: 50%;
        transform: translateX(-50%);
    `,

    positionYCenter: `
        position: absolute;
        top: 50%;
        left: 0;
        transform: translateY(-50%);
    `,

    marginXCenter: `
        margin: 0 auto;
    `,

    marginYCenter: `
        margin: auto 0;
    `,
};

const size = {
    desktop: "1200px",
    // mobile: "600px",
    mobile: "768px",
    userForm: "448px",
};

const device = {
    desktop: `@media only screen and (max-width: ${size.desktop})`,
    mobile: `@media only screen and (max-width: ${size.mobile})`,
    userForm: `@media only screen and (max-width: ${size.userForm})`,
};

const TimeGradient = {
    dawn: `linear-gradient(to bottom, #dfefff 0%, #eeecf5 100vh, #ffe9e9 100%);`,
    morning: `linear-gradient(to bottom, #BED6FF 0%, #D4E4F5 100vh, #FFFEE3 100%);`,
    afternoon: `linear-gradient(to bottom, #FFC9AD 0%, #D0BDC6 100vh, #AFC5E8 100%);`,
    evening: `linear-gradient(to bottom, #3A3549 0%, #544946 100vh, #705E42 100%);`,
};

const theme: DefaultTheme = {
    colors,
    fonts,
    device,
    common,
    TimeGradient,
};

export default theme;
