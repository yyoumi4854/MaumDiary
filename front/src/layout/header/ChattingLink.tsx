import React from "react";

import * as Style from "@/style/layout/header/ChattingLink-style";

import TelegramIcon from "@mui/icons-material/Telegram";

const ChattingLink = () => {
    return (
        <Style.ChattingLinkContent>
            <ul>
                <li className="pc">
                    <a href="#">
                        <TelegramIcon />
                        <span>10</span>
                    </a>
                </li>
                <li className="mobile">
                    <a href="#">서비스 소개</a>
                </li>
            </ul>
        </Style.ChattingLinkContent>
    );
};

export default ChattingLink;
