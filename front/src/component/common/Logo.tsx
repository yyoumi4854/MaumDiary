import { Link } from "react-router-dom";

import logo from "@/images/logo.svg";

const Logo = () => {
    return (
        <h1>
            <img src={logo} alt="마음일기 로고" />
        </h1>
    );
};

export default Logo;
