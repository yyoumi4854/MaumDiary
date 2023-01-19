import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { BsList } from "react-icons/bs";

import Logo from "@/component/common/Logo";
import PcNav from "./PcNav";
import MobileNav from "./MobileNav";
import RightMenu from "./RightMenu";

import * as Style from "@/style/layout/header/Header-style";

const Header = () => {
    const [headerBackground, setHeaderBackground] = useState(false);
    const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

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
        <Style.HeaderContent scroll={headerBackground && true}>
            <div className="inner">
                <button className="mobile" onClick={() => setIsMobileNavOpen(true)}>
                    <BsList />
                </button>
                <Style.LeftContent>
                    <Link to="/">
                        <Logo />
                    </Link>
                    <PcNav />
                </Style.LeftContent>
                <RightMenu />
            </div>

            {isMobileNavOpen && <MobileNav setIsMobileNavOpen={setIsMobileNavOpen} />}
        </Style.HeaderContent>
    );
};

export default Header;
