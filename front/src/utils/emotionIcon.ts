import { Emotion } from "@/types";

import confidence from "@/images/emotion/confidence.svg";
import excitement from "@/images/emotion/excitement.svg";
import thanks from "@/images/emotion/thanks.svg";
import comfort from "@/images/emotion/comfort.svg";
import worry from "@/images/emotion/worry.svg";
import sad from "@/images/emotion/sad.svg";
import hurt from "@/images/emotion/hurt.svg";
import angry from "@/images/emotion/angry.svg";

export const emotionIcon: Record<Emotion, { name: string; icon: string }> = {
    confidence: { name: "자신감", icon: confidence },
    excitement: { name: "신남", icon: excitement },
    thanks: { name: "감사", icon: thanks },
    comfort: { name: "편안", icon: comfort },
    worry: { name: "불안", icon: worry },
    sad: { name: "슬픔", icon: sad },
    hurt: { name: "상처", icon: hurt },
    angry: { name: "분노", icon: angry },
};

export default { confidence, excitement, thanks, comfort, worry, sad, hurt, angry };
