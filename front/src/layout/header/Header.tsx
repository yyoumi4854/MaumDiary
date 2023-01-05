import React from "react";

import Nav from "./Nav";
import RightMenu from "./RightMenu";

import * as Style from "@/style/layout/header/Header-style";

import logo from "@/images/logo.svg";

const Header = () => {
    return (
        <Style.HeaderContent>
            <div className="inner">
                <Style.LeftContent>
                    <h1>
                        <img src={logo} alt="마음일기 로고" />
                    </h1>
                    <Nav />
                </Style.LeftContent>
                <RightMenu />
            </div>
        </Style.HeaderContent>
    );
};

export default Header;
