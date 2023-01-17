import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { BsChat } from "react-icons/bs";

import ProfileModal from "./ProfileModal";

import * as Style from "@/style/layout/header/IsLoginMenu-style";

const IsLoginMenu = () => {
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
        <Style.IsLoginMenuContent>
            <ul>
                <Style.ChattingList>
                    <Link to="diary/chat">
                        <BsChat />
                        <span>10</span>
                    </Link>
                </Style.ChattingList>
                <Style.ProfileToggleList>
                    <button ref={modalRef} onClick={() => setModal(!modal)}>
                        <div>
                            <img src="" alt="" />
                        </div>
                    </button>
                    {modal && <ProfileModal />}
                </Style.ProfileToggleList>
            </ul>
        </Style.IsLoginMenuContent>
    );
};

export default IsLoginMenu;
