import { DefaultTheme } from "styled-components";

export type colorsType = typeof colors;
export type fontsType = typeof fonts;
export type commonType = typeof common;
export type deviceType = typeof device;

const colors = {
    // main
    main: "#84B4FF",
    mainDeep: "#498FFF",
    mainDark: "#475367",

    // grey
    greyText: "#888",
    greyBorder: "#E1E1E1",
    greytBackground: "#F8F8F8",

    // background by time
    morningLevel1: "#DFEFFF",
    morningLevel2: "#EEECF5",
    morningLevel3: "#FFE9E9",

    dayLevel1: "#BED6FF",
    dayLevel2: "#D4E4F5",
    dayLevel3: "#FFFEE3",

    afternoonLevel1: "#FFC9AD",
    afternoonLevel2: "#D0BDC6",
    afternoonLevel3: "#AFC5E8",
    afternoonCloud: "#FFF0C7",

    nightLevel1: "#3A3549",
    nightLevel2: "#544946",
    nightLevel3: "#705E42",
    nightStar: "#FFF4BD",

    // emotion
    emotionConfidence: "#FED723",
    emotionExcite: "#FEA723",
    emotionThanks: "#F8B7C9",
    emotionComfortable: "#D4EDF9",
    emotionAnxiety: "#9EA2A7",
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
        // xSmall: ".5rem", // 8px
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
};

const size = {
    desktop: "1200px",
    // tablet: "768px",
    // mobile: "600px",
    mobile: "768px",
    userForm: "448px",
};

const device = {
    desktop: `@media only screen and (max-width: ${size.desktop})`,
    // tablet: `@media only screen and (max-width: ${size.tablet})`,
    mobile: `@media only screen and (max-width: ${size.mobile})`,
    userForm: `@media only screen and (max-width: ${size.userForm})`,
};

const theme: DefaultTheme = {
    colors,
    fonts,
    device,
    common,
};

export default theme;
