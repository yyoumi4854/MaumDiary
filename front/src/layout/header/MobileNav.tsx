import React, { useEffect, MouseEvent } from "react";
import { Link } from "react-router-dom";

import * as FixModal from "@/utils/FixModalScroll";

import * as Style from "@/style/layout/header/MobileNav-style";
import * as Common from "@/style/common/common-style";

type Props = {
    setIsMobileNavOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const MobileNav = ({ setIsMobileNavOpen }: Props) => {
    useEffect(() => {
        FixModal.disableScroll();
        return FixModal.enableScroll;
    });

    const handleCloseModal = (e: MouseEvent<HTMLDivElement>) => {
        const { className } = e.target as any;

        if (className.includes("active") === false) {
            setIsMobileNavOpen(false);
        }
    };

    return (
        <Common.FixedContent className="mobile" onClick={handleCloseModal}>
            <Style.MobileNavContent className="active">
                <ul>
                    <li>
                        <Link to="/diary/calendar">일기장</Link>
                    </li>
                    <li>
                        <Link to="/diary/write">일기 쓰기</Link>
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
