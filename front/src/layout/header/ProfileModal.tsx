import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { BsPerson, BsPower } from "react-icons/bs";

import * as Style from "@/style/layout/header/ProfileModal-style";

const ProfileModal = () => {
    const modalRef = useRef<HTMLButtonElement>(null);
    const [modal, setModal] = useState(false);

    useEffect(() => {
        window.addEventListener("click", handleCloseModal);

        return () => {
            window.addEventListener("click", handleCloseModal);
        };
    });

    const handleCloseModal = (e: React.BaseSyntheticEvent | MouseEvent) => {
        if (modalRef.current) {
            const target = modalRef.current.contains(e.target);

            !target && setModal(false);
        }
    };

    return (
        <Style.ProfileToggleContent>
            <button ref={modalRef} onClick={() => setModal(!modal)}>
                <div>img</div>
            </button>
            {modal && (
                <Style.ProfileContent>
                    <Style.ProfileTopContent>
                        <div>프로필</div>
                        <div>
                            <p>겨울감자</p>
                            <span>ruyria</span>
                        </div>
                    </Style.ProfileTopContent>
                    <Style.ProfileBottomContent>
                        <ul>
                            <li>
                                <Link to="/user">
                                    <BsPerson />
                                    <span>내정보</span>
                                </Link>
                            </li>
                            <li>
                                <button>
                                    <BsPower />
                                    <span>로그아웃</span>
                                </button>
                            </li>
                        </ul>
                    </Style.ProfileBottomContent>
                </Style.ProfileContent>
            )}
        </Style.ProfileToggleContent>
    );
};

export default ProfileModal;
