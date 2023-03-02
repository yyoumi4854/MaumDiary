import { useRecoilValue } from "recoil";

import { userAtom } from "@/recoil/user";
import IsLoginMenu from "./IsLoginMenu";
import UserMenu from "./UserMenu";

import * as Style from "@/style/layout/header/RightMenu-style";

const RightMenu = () => {
    const user = useRecoilValue(userAtom);

    return (
        <>
            {user === null ? (
                <UserMenu />
            ) : (
                <Style.RightMenuContent>
                    <IsLoginMenu />
                </Style.RightMenuContent>
            )}
        </>
    );
};

export default RightMenu;
