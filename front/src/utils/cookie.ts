interface CookieOption {
    path?: string;
    expires?: Date;
    maxAge?: number;
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
    return document.cookie.match("(^|;) ?" + key + "=([^;]*)");
};

export const deleteCookie = (key: string) => {
    setCookie(key, "", {
        maxAge: -1,
    });
};
