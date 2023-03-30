import React from "react";

import Nav from "./Nav";

import * as Style from "@/style/layout/footer/Footer-style";

import Logo from "@/component/common/Logo";

const Footer = () => {
    return (
        <Style.FooterContent>
            <div>
                <Logo />
                <Nav />
                <p>&copy; 2023. MaumDiary all rights reserved.</p>
            </div>
        </Style.FooterContent>
    );
};

export default Footer;
