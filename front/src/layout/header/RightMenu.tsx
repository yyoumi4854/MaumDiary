import React, { useState } from "react";

import ChattingLink from "./ChattingLink";
import ProfileModal from "./ProfileModal";
import UserMenu from "./UserMenu";

import * as Style from "@/style/layout/header/RightMenu-style";

const RightMenu = () => {
    const [login, setLogin] = useState(false); // 임의로 넣은 값

    return (
        <>
            {login ? (
                <Style.RightMenuContent>
                    <ChattingLink />
                    <ProfileModal />
                </Style.RightMenuContent>
            ) : (
                <UserMenu />
            )}
        </>
    );
};

export default RightMenu;
