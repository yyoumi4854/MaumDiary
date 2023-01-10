import React from "react";

import Nav from "./Nav";

import * as Style from "@/style/layout/footer/Footer-style";

import logo from "@/images/logo.svg";

const Footer = () => {
    return (
        <Style.FooterContent>
            <div>
                <h1>
                    <img src={logo} alt="마음일기" />
                </h1>

                <Nav />

                <p>&copy; 2023. MaumDiary all rights reserved.</p>
            </div>
        </Style.FooterContent>
    );
};

export default Footer;
