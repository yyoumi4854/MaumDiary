import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import Nav from "./Nav";
import RightMenu from "./RightMenu";

import * as Style from "@/style/layout/header/Header-style";

import logo from "@/images/logo.svg";

const Header = () => {
    const [headerBackground, setHeaderBackground] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    });

    const handleScroll = () => {
        setHeaderBackground(window.scrollY ? true : false);
    };

    return (
        <Style.HeaderContent className={headerBackground ? "active" : ""}>
            <div className="inner">
                <Style.LeftContent>
                    <h1>
                        <Link to="/">
                            <img src={logo} alt="마음일기 로고" />
                        </Link>
                    </h1>
                    <Nav />
                </Style.LeftContent>
                <RightMenu />
            </div>
        </Style.HeaderContent>
    );
};

export default Header;
