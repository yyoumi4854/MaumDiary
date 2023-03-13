import React, { useEffect, MouseEvent } from "react";
import { Link } from "react-router-dom";

import { userAtom } from "@/recoil/user";
import * as FixModal from "@/utils/FixModalScroll";

import * as Style from "@/style/layout/header/MobileNav-style";
import * as Common from "@/style/common/common-style";
import { useRecoilValue } from "recoil";

interface Props {
    setIsMobileNavOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const MobileNav = ({ setIsMobileNavOpen }: Props) => {
    const user = useRecoilValue(userAtom);

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
                    {user !== null && (
                        <>
                            <li>
                                <Link to="/diary/calendar">일기장</Link>
                            </li>
                            <li>
                                <Link to="/diary/write">일기 쓰기</Link>
                            </li>
                        </>
                    )}
                    <li>
                        <Link to="/intro">서비스 소개</Link>
                    </li>
                </ul>
            </Style.MobileNavContent>
        </Common.FixedContent>
    );
};

export default MobileNav;
