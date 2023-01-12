import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import Logo from "@/component/common/Logo";
import Nav from "./Nav";
import RightMenu from "./RightMenu";

import * as Style from "@/style/layout/header/Header-style";

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
                    <Link to="/">
                        <Logo />
                    </Link>
                    <Nav />
                </Style.LeftContent>
                <RightMenu />
            </div>
        </Style.HeaderContent>
    );
};

export default Header;
