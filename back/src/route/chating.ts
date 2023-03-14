import { Router, Request as Req, Response as Res } from "express";
import AppError from "lib/AppError";
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
    "/rooms",
    wrapRouter(async (req: Req, res: Res) => {
        const { count, page, owner } = req.query as {
            count: string;
            page: string;
            owner: string;
        };

        if (count === undefined || page === undefined || owner === undefined) {
            throw new AppError("ArgumentError");
        }

        const result = await chatting.getAllChattingRoom(Number(count), Number(page), owner);

        return { statusCode: 200, content: result };
    })
);

chattingRouter.get(
    "/messages",
    wrapRouter(async (req: Req, res: Res) => {
        const { count, page, roomID } = req.query as {
            count: string;
            page: string;
            roomID: string;
        };

        if (count === undefined || page === undefined || roomID === undefined) {
            throw new AppError("ArgumentError");
        }

        const result = await chatting.getAllMessage(Number(count), Number(page), Number(roomID));

        return { statusCode: 200, content: result };
    })
);

export default chattingRouter;
