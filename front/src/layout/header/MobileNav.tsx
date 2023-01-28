import React, { useEffect, useRef, MouseEvent } from "react";
import { Link } from "react-router-dom";

import * as Style from "@/style/layout/header/MobileNav-style";
import * as Common from "@/style/common/common-style";

type Props = {
    isMobileNavOpen: boolean;
    setIsMobileNavOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const MobileNav = ({ isMobileNavOpen, setIsMobileNavOpen }: Props) => {
    const mobileNavContentRef = useRef<HTMLDivElement>(null);

    const handleCloseModal = (e: MouseEvent<HTMLDivElement>) => {
        const { className } = e.target as any;

        if (className.includes("active1") === false) {
            // console.log("클릭중...");
            setIsMobileNavOpen(() => false);
        }
    };

    return (
        <Common.FixedContent className="mobile" onClick={handleCloseModal}>
            <Style.MobileNavContent ref={mobileNavContentRef} className="active1">
                <ul>
                    <li>
                        <Link to="/diary/calendar">일기장</Link>
                    </li>
                    <li>
                        <Link to="/diary/calendar">일기 쓰기</Link>
                    </li>
                    <li>
                        <a href="#">서비스 소개</a>
                    </li>
                </ul>
            </Style.MobileNavContent>
        </Common.FixedContent>
    );
};

export default MobileNav;
