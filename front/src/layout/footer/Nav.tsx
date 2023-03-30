import { useRecoilValue } from "recoil";

import { userAtom } from "@/recoil/user";
import { Link } from "react-router-dom";

import * as Style from "@/style/layout/footer/Nav-style";

const Nav = () => {
    const user = useRecoilValue(userAtom);

    return (
        <Style.NavContent>
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
        </Style.NavContent>
    );
};

export default Nav;
