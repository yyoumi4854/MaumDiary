import React from "react";

import * as Style from "@/style/layout/header/ChattingLink-style";

import TelegramIcon from "@mui/icons-material/Telegram";

const ChattingLink = () => {
    return (
        <Style.ChattingLinkContent>
            <a href="#">
                <TelegramIcon />
                <span>10</span>
            </a>
        </Style.ChattingLinkContent>
    );
};

export default ChattingLink;
