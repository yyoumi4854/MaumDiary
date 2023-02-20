import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import useKakao from "@/hooks/useKakao";

const KakaoAuth = () => {
    const { fetchingUserData } = useKakao();

    const navigate = useNavigate();

    useEffect(() => {
        fetchingUserData().then(() => navigate("/"));
    }, []);

    return <div>어서오세용</div>;
};

export default KakaoAuth;
