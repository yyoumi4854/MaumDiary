import { LoadingContent } from "@/style/common/Loading-style";

const Loading = () => {
    return (
        <LoadingContent>
            <svg>
                <circle cx="50%" cy="50%" r="25"></circle>
            </svg>
        </LoadingContent>
    );
};

export default Loading;
