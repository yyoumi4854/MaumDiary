import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { BsList } from "react-icons/bs";

import PcNav from "./PcNav";
import MobileNav from "./MobileNav";
import RightMenu from "./RightMenu";

import * as Style from "@/style/layout/header/Header-style";

import logo from "@/images/logo.svg";

const Header = () => {
    const [headerBackground, setHeaderBackground] = useState(false);
    const [isMobileNavOpen, setIsMobileNavOpen] = useState(true);

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    });

    const handleScroll = () => {
        setHeaderBackground(window.scrollY ? true : false);
    };

    // console.log("렌더링");

    return (
        <Style.HeaderContent className={headerBackground ? "active" : ""}>
            <div className="inner">
                <button className="mobile" onClick={() => setIsMobileNavOpen(true)}>
                    <BsList />
                </button>
                <Style.LeftContent>
                    <h1>
                        <Link to="/">
                            <img src={logo} alt="마음일기 로고" />
                        </Link>
                    </h1>
                    <PcNav />
                </Style.LeftContent>
                <RightMenu />
            </div>

            {isMobileNavOpen && (
                <MobileNav
                    isMobileNavOpen={isMobileNavOpen}
                    setIsMobileNavOpen={setIsMobileNavOpen}
                />
            )}
        </Style.HeaderContent>
    );
};

export default Header;
