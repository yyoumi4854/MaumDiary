import { useRef, useState, FormEvent } from "react";
import { useSetRecoilState } from "recoil";
import { useNavigate, Link, useLocation } from "react-router-dom";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { BsChevronRight } from "react-icons/bs";

import { userAtom } from "@/recoil/user";
import { fetchUserData, login } from "@/api/account";
import useKakao from "@/hooks/useKakao";

import * as TextStyle from "@/style/common/Text-style";
import * as FormStyle from "@/style/common/Form-style";
import * as ButtonStyle from "@/style/common/Button-style";
import * as UserFormStyle from "@/style/common/UserForm-style";
import * as Style from "@/style/page/Login-style";

import faviconLogo from "@/images/favicon-logo.svg";
import { ACCOUNT } from "@/constant/QUERY_KEY";

const Login = () => {
    const userIDRef = useRef<HTMLInputElement | null>(null);
    const passwordRef = useRef<HTMLInputElement | null>(null);

    const [warning, setWarning] = useState(false);
    const setUserData = useSetRecoilState(userAtom);

    const queryClient = useQueryClient();

    const navigate = useNavigate();
    const location = useLocation();

    const { authorization, login: kakaoLogin } = useKakao();

    const mutation = useMutation({
        mutationFn: login,
        onSuccess: (result) => {
            if (result.data) {
                queryClient
                    .fetchQuery({
                        queryKey: [ACCOUNT.USER],
                        queryFn: fetchUserData,
                        cacheTime: 0,
                    })
                    .then((result) => {
                        setUserData(result.data);
                    });

                navigate("/");
            } else {
                setWarning(true);
            }
        },
    });

    const onFocus = () => {
        if (warning === true) {
            setWarning(false);
        }
    };

    const onSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (
            userIDRef.current === null ||
            passwordRef.current === null ||
            userIDRef.current.value === "" ||
            passwordRef.current.value === ""
        )
            return;

        mutation.mutate({ userID: userIDRef.current.value, password: passwordRef.current.value });
    };

    const onClickKakaoLogin = () => {
        authorization();

        kakaoLogin();
    };

    return (
        <UserFormStyle.UserFormContent className="content">
            <div className="userFormInner">
                <UserFormStyle.TitleContent>
                    <img src={faviconLogo} alt="마음일기 로고" />
                    <TextStyle.TitleText textAlign="center">로그인</TextStyle.TitleText>
                </UserFormStyle.TitleContent>

                <form onSubmit={onSubmit}>
                    <UserFormStyle.InputWrap marginTop="2.5em">
                        <FormStyle.BasicsInputText
                            type="text"
                            defaultValue={location.state}
                            placeholder="아이디"
                            marginBottom="1em"
                            ref={userIDRef}
                            onFocus={onFocus}
                        />
                        <FormStyle.BasicsInputText
                            type="password"
                            placeholder="비밀번호"
                            ref={passwordRef}
                            onFocus={onFocus}
                        />
                        <FormStyle.MessageText warnning={true}>
                            {warning && "아이디 또는 비밀번호가 틀렸습니다."}
                        </FormStyle.MessageText>
                    </UserFormStyle.InputWrap>

                    <ButtonStyle.LongButton>로그인</ButtonStyle.LongButton>
                </form>

                <UserFormStyle.userFomMenu>
                    <ul>
                        <li>
                            <Link to={"/recovery/id"}>아이디 찾기</Link>
                        </li>
                        <li>
                            <Link to={"/recovery/password"}>비밀번호 찾기</Link>
                        </li>
                        <li>
                            <Link to={"/register"}>회원가입</Link>
                        </li>
                    </ul>
                </UserFormStyle.userFomMenu>

                <Style.EasyLoginContent>
                    <span>or</span>
                    <a href="#">
                        <p>
                            간편하게 시작하기
                            <BsChevronRight />
                        </p>
                        <span onClick={onClickKakaoLogin}>카카오</span>
                    </a>
                </Style.EasyLoginContent>
            </div>
        </UserFormStyle.UserFormContent>
    );
};

export default Login;
