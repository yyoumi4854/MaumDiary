import * as Style from "@/style/page/Home-style";

const Home = () => {
    return (
        <div className="content">
            <div className="inner">
                <Style.Greeting>
                    <span>겨울감자</span>님, <br />
                    어떤 하루를 보내셨나요? 오늘의 마음을 기록해 보세요!
                </Style.Greeting>
                <Style.WriteButton>오늘 일기 쓰기</Style.WriteButton>
            </div>
        </div>
    );
};

export default Home;
