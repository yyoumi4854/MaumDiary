import styled from "styled-components";

export const UserImgContent = styled.div`
    margin-top: 1em;

    div {
        position: relative;
        width: 120px;
        height: 120px;
        margin: 0 auto;
        div {
            border: 6px solid ${({ theme }) => theme.colors.main};
            border-radius: 50%;
            background: #d9d9d9;
            overflow: hidden;
        }

        span {
            ${({ theme }) => theme.common.flexCenter}
            position: absolute;
            right: 0;
            bottom: 0;
            width: 40px;
            height: 40px;
            border-radius: 50%;
            background: #fff;

            svg {
                width: 20px;
                height: 20px;
            }
        }
    }

    ${({ theme }) => theme.device.mobile} {
        div {
            width: 108px;
            height: 108px;

            span {
                width: 36px;
                height: 36px;

                svg {
                    width: 18px;
                    height: 18px;
                }
            }
        }
    }
`;

export const ButtonContent = styled.div`
    margin-top: 1.5em;
    button {
        display: block;
        margin: 0 auto;
        text-decoration: underline;
        font-weight: ${({ theme }) => theme.fonts.weight.light};
        color: ${({ theme }) => theme.colors.greyText};
    }
`;
