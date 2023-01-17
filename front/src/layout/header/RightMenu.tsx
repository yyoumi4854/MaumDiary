import React, { useState } from "react";

import IsLoginMenu from "./IsLoginMenu";
import UserMenu from "./UserMenu";

import * as Style from "@/style/layout/header/RightMenu-style";

const RightMenu = () => {
    const [isLogin, setisLogin] = useState(true); // 로그인 할때 안할때

    return (
        <>
            {isLogin ? (
                <Style.RightMenuContent>
                    <IsLoginMenu />
                </Style.RightMenuContent>
            ) : (
                <UserMenu />
            )}
        </>
    );
};

export default RightMenu;
