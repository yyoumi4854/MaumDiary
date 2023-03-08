import { Router, Request as Req, Response as Res } from "express";
import wrapRouter from "lib/wrapRouter";
import chatting from "services/chattingService";

const chattingRouter = Router();

chattingRouter.post(
    "/",
    wrapRouter(async (req: Req, res: Res) => {
        const { transmitter, receiver } = req.body;

        const result = await chatting.createRoom(transmitter, receiver);

        return { statusCode: 200, content: result };
    })
);

chattingRouter.get(
    "/all",
    wrapRouter(async (req: Req, res: Res) => {
        const { owner, count, page } = req.query as { count: string; page: string; owner: string };

        const result = await chatting.getAllChattingRoom(Number(count), Number(page), owner);

        return { statusCode: 200, content: result };
    })
);

export default chattingRouter;
