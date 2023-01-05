import React from "react";

import ChattingLink from "./ChattingLink";
import ProfileToggle from "./ProfileToggle";

import * as Style from "@/style/layout/header/RightMenu-style";

const RightMenu = () => {
    return (
        <Style.RightMenuContent>
            <ChattingLink />
            <ProfileToggle />
        </Style.RightMenuContent>
    );
};

export default RightMenu;
