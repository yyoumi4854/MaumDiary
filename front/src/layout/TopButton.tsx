import { useEffect, useState } from "react";
import { BsArrowBarUp } from "react-icons/bs";

import { TopButtonWrap } from "@/style/layout/TopButton- style";

const TopButton = () => {
    const [topButton, setTopButton] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", scroll);
        return () => {
            window.removeEventListener("scroll", scroll);
        };
    });

    const scroll = () => {
        setTopButton(window.scrollY ? true : false);
    };

    return (
        <>
            {topButton && (
                <TopButtonWrap
                    onClick={() =>
                        window.scrollTo({
                            top: 0,
                            behavior: "smooth",
                        })
                    }
                >
                    <BsArrowBarUp />
                </TopButtonWrap>
            )}
        </>
    );
};

export default TopButton;
