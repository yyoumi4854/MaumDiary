import styled, { UserFormStyle } from "styled-components";

export const UserFormContent = styled.div`
    .userFormInner {
        width: 400px;
        margin: 0 auto;
        padding: 160px 0;
    }

    ${({ theme }) => theme.device.mobile} {
        .userFormInner {
            padding: 64px 0;
        }
    }

    ${({ theme }) => theme.device.userForm} {
        .userFormInner {
            width: calc(100% - 10%);
        }
    }
`;

export const TitleContent = styled.div`
    text-align: center;
    img {
        margin-bottom: 16px;
    }

    ${({ theme }) => theme.device.mobile} {
        img {
            width: 36px;
            margin-bottom: 8px;
        }
    }
`;

export const InputWrap = styled.div<UserFormStyle>`
    position: relative;
    margin-top: ${({ marginTop }) => marginTop};
    margin-bottom: 4em;

    & > span {
        position: absolute;
    }
`;

export const userFomMenu = styled.div`
    margin-top: 24px;

    ul {
        ${({ theme }) => theme.common.flexCenter}

        li {
            position: relative;
            margin: 0 1em;

            & + li::before {
                content: "";
                position: absolute;
                top: 0;
                left: -1em;
                width: 1px;
                height: 100%;
                background: ${({ theme }) => theme.colors.greyText};
            }

            a {
                font-weight: ${({ theme }) => theme.fonts.weight.light};
                font-size: ${({ theme }) => theme.fonts.size.small};
            }
        }
    }
`;
