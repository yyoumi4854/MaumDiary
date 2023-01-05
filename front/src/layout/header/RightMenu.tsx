import React from "react";

import ChattingLink from "./ChattingLink";
import ProfileModal from "./ProfileModal";

import * as Style from "@/style/layout/header/RightMenu-style";

const RightMenu = () => {
    return (
        <Style.RightMenuContent>
            <ChattingLink />
            <ProfileModal />
        </Style.RightMenuContent>
    );
};

export default RightMenu;
