import * as Style from "@/style/layout/Main-style";

interface Props {
    children: React.ReactNode;
}

const Main = ({ children }: Props) => {
    return <Style.MainContainer>{children}</Style.MainContainer>;
};

export default Main;
