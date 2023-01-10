import React from "react";

import * as Style from "@/style/layout/header/ChattingLink-style";

import { BsChat } from "react-icons/bs";

const ChattingLink = () => {
    return (
        <Style.ChattingLinkContent>
            <ul>
                <li className="pc">
                    <a href="#">
                        <BsChat />
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
