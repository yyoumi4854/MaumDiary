import dayjs from "dayjs";

interface CookieOption {
    path?: string;
    expires?: Date;
    "max-age"?: number;
    domain?: string;
    secure?: boolean;
    httpOnly?: boolean;
    sameSite?: boolean;
}

export const setCookie = (key: string, value: string, options?: CookieOption) => {
    let cookie = key + "=" + value + "; ";
    if (options !== undefined) {
        Object.entries(options).forEach(([option, optionValue]) => {
            if (optionValue instanceof Date) {
                cookie += option + "=" + optionValue.toUTCString() + "; ";
            } else {
                cookie += option + "=" + optionValue + "; ";
            }
        });
    }

    document.cookie = cookie;
};

export const getCookie = (key: string) => {
    const result = document.cookie.match(new RegExp("(^|;) ?" + key + "=([^;]*)"));

    return result ? result[2] : undefined;
};

export const deleteCookie = (key: string) => {
    setCookie(key, " ", {
        "max-age": -1,
    });
};
