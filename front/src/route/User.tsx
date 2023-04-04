import { ChangeEvent, FormEvent, useState, MouseEvent } from "react";
import { useRecoilState } from "recoil";
import { useMutation } from "@tanstack/react-query";
import { BsPencilFill } from "react-icons/bs";

import Withdrawal from "../component/Withdrawal";
import { userAtom } from "@/recoil/user";
import { checkAccount, savePassword } from "@/api/account";
import { saveNickname } from "@/api/user";
import { validateLength, validateNickname } from "@/utils/regExp";

import * as TextStyle from "@/style/common/Text-style";
import * as FormStyle from "@/style/common/Form-style";
import * as ButtonStyle from "@/style/common/Button-style";
import * as UserFormStyle from "@/style/common/UserForm-style";
import * as Style from "@/style/page/User-style";

import faviconLogo from "@/images/favicon-logo.svg";

const User = () => {
    const [user, setUser] = useRecoilState(userAtom);
    if (!user) return null;

    const [cancelAccountModal, setCancelAccountModal] = useState(false);

    const [nickname, setNickname] = useState(user.User.nickname);
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const [nicknameStep, setNicknameStep] = useState(0);

    const save =
        (nickname && nicknameStep === 3) || (confirmPassword && confirmPassword === password); // + 프로필

    const checkMutation = useMutation({
        mutationFn: checkAccount,
        onSuccess: (data, variables) => {
            if (variables.target === "nickname") {
                setNicknameStep(data.data ? 3 : 2);
            }
        },
    });

    let timerNickname: NodeJS.Timeout;
    const onChangeNickname = (e: ChangeEvent<HTMLInputElement>) => {
        const { nickname } = user.User;
        const { value } = e.target as any;
        setNickname(value);

        // 기존닉네임과 같거나 빈문자열이면 0 아니면 1
        setNicknameStep(value === nickname || !value ? 0 : 1);

        // 정규식 통과 닉네임 2, 중복체크에 통과된 닉네임 3
        if (value !== nickname && validateNickname(value)) {
            clearTimeout(timerNickname);
            timerNickname = setTimeout(() => {
                checkMutation.mutate({
                    target: "nickname",
                    value: value,
                });
            }, 1000);
        }
    };

    const nicknameMutation = useMutation({
        mutationFn: saveNickname,
        onSuccess: (data) => {
            if (data.data.ok) {
                let copy = { ...user, User: { ...user.User } };

                copy.User.nickname = nickname;
                setUser(copy);

                setNickname(nickname);
                setNicknameStep(0);
            }
        },
    });

    const passwardMutation = useMutation({
        mutationFn: savePassword,
        onSuccess: (data) => {
            if (data.data.ok) {
                setPassword("");
                setConfirmPassword("");
            }
        },
    });

    const onSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (nicknameStep === 3) {
            nicknameMutation.mutate({
                nickname: nickname,
            });
        }

        if (confirmPassword === password && confirmPassword) {
            passwardMutation.mutate({
                password: confirmPassword,
            });
        }

        if (nicknameStep === 3 && confirmPassword === password && confirmPassword) {
            alert("닉네임, 비밀번호를 수정하셨습니다.");
        } else if (nicknameStep === 3) {
            alert("닉네임을 수정하셨습니다.");
        } else if (confirmPassword === password) {
            alert("비밀번호을 수정하셨습니다.");
        }
    };

    return (
        <>
            <UserFormStyle.UserFormContent className="content">
                <div className="userFormInner">
                    <form onSubmit={onSubmit}>
                        <UserFormStyle.TitleContent>
                            <img src={faviconLogo} alt="마음일기 로고" />
                            <TextStyle.TitleText textAlign="center">내 정보</TextStyle.TitleText>
                        </UserFormStyle.TitleContent>

                        <Style.UserImgContent>
                            <div>
                                <div>
                                    <img src="" alt="프로필" />
                                </div>
                                <span>
                                    <BsPencilFill />
                                </span>
                            </div>
                        </Style.UserImgContent>

                        <UserFormStyle.InputWrap marginTop="2.5em">
                            <FormStyle.FormContent>
                                <p>닉네임</p>
                                <FormStyle.BasicsInputText
                                    type="text"
                                    placeholder="사용할 닉네임을 입력해주세요."
                                    value={nickname}
                                    onChange={onChangeNickname}
                                />
                                <FormStyle.MessageText warnning={nicknameStep < 3}>
                                    {nicknameStep === 1 &&
                                        "특수문자, 공백 제외, 2~8글자로 입력해주세요."}
                                    {nicknameStep === 2 && "중복된 아이디 입니다."}
                                    {nickname && nicknameStep === 3 && "사용가능한 닉네임 입니다."}
                                </FormStyle.MessageText>
                            </FormStyle.FormContent>

                            <FormStyle.FormContent>
                                <p>비밀번호 변경</p>
                                <FormStyle.BasicsInputText
                                    type="password"
                                    placeholder="비밀번호를 입력해주세요."
                                    value={password}
                                    onChange={(e: ChangeEvent<HTMLInputElement>) => {
                                        const { value } = e.target as any;
                                        setPassword(value);
                                    }}
                                />
                                <FormStyle.MessageText warnning={!validateLength(password)}>
                                    {password &&
                                        !validateLength(password) &&
                                        "4~6글자 입력해주세요."}
                                    {validateLength(password) && "사용가능한 비밀번호 입니다."}
                                </FormStyle.MessageText>
                            </FormStyle.FormContent>

                            <FormStyle.FormContent>
                                <p>비밀번호 변경 확인</p>
                                <FormStyle.BasicsInputText
                                    type="password"
                                    placeholder="비밀번호를 입력해주세요."
                                    disabled={!validateLength(password)}
                                    value={confirmPassword}
                                    onChange={(e: ChangeEvent<HTMLInputElement>) => {
                                        const { value } = e.target as any;
                                        setConfirmPassword(value);
                                    }}
                                />
                                <FormStyle.MessageText warnning={confirmPassword !== password}>
                                    {confirmPassword &&
                                        confirmPassword !== password &&
                                        "비밀번호가 일치하지 않습니다."}
                                    {confirmPassword &&
                                        confirmPassword === password &&
                                        "비밀번호가 일치합니다."}
                                </FormStyle.MessageText>
                            </FormStyle.FormContent>
                        </UserFormStyle.InputWrap>

                        <ButtonStyle.LongButton disabled={!save}>
                            변경 사항 저장
                        </ButtonStyle.LongButton>
                    </form>

                    <Style.ButtonContent>
                        <button onClick={() => setCancelAccountModal(!cancelAccountModal)}>
                            회원탈퇴
                        </button>
                    </Style.ButtonContent>
                </div>
            </UserFormStyle.UserFormContent>

            {cancelAccountModal && <Withdrawal setCancelAccountModal={setCancelAccountModal} />}
        </>
    );
};

export default User;
