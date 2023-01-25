import logo from "@/images/logo.svg";
import * as Style from "@/style/common/Logo-style";

const Logo = () => {
    return (
        <Style.LogoContent>
            <img src={logo} alt="마음일기 로고" />
        </Style.LogoContent>
    );
};

export default Logo;
