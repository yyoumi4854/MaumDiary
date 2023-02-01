import { Router, Request as Req, Response as Res } from "express";
import axios from "axios";
import dayjs from "dayjs";
import wrapRouter from "../lib/wrapRouter";
import diaryService from "../services/diaryService";
import auth from "../middleware/auth";
import AppError from "../lib/AppError";

const diaryRouter = Router();

//일기 작성
diaryRouter.post(
    "/",
    auth,
    wrapRouter(async (req: Req, res: Res) => {
        const { title, description, weather, lock, createdAt } = req.body;

        if (
            typeof title !== "string" ||
            typeof description !== "string" ||
            typeof weather !== "string" ||
            typeof lock !== "boolean"
        ) {
            throw new AppError("ArgumentError");
        }

        // const response = await axios.post("http://localhost:8000/api/emotion-check", {
        //     text: description,
        // });
        await diaryService.writeDiary(
            req.userID!,
            title,
            description,
            // response.data.result[0],
            weather,
            "comfort",
            lock,
            createdAt && dayjs(createdAt)
        );

        return { statusCode: 200, content: true };
    })
);

// 달마다 일기 조회
diaryRouter.get(
    "/user",
    auth,
    wrapRouter(async (req: Req, res: Res) => {
        const { year, month } = req.query;

        if (typeof year !== "string" || typeof month !== "string") {
            throw new AppError("ArgumentError");
        }

        const result = await diaryService.getUserDiaryListByMonth(
            req.userID!,
            Number(year),
            Number(month)
        );

        return { statusCode: 200, content: result };
    })
);

//모든 일기(공개 / 유저) 조회
diaryRouter.get(
    "/all",
    wrapRouter(async (req: Req, res: Res) => {
        const { user, count, page, emotion, lock } = req.query;

        if (typeof emotion !== "string" || typeof lock !== "string") {
            throw new AppError("ArgumentError");
        }

        if (user === "false") {
            if (typeof count !== "string" || typeof page !== "string") {
                throw new AppError("ArgumentError");
            }

            const result = await diaryService.getDiaryList(
                Number(count),
                Number(page),
                lock === "true" ? true : false,
                String(emotion)
            );
            return { statusCode: 200, content: result };
        } else if (user === "true") {
            const result = await diaryService.getUserDiaryList(
                req.userID!,
                Number(count),
                Number(page)
            );

            return { statusCode: 200, content: result };
        } else {
            throw new AppError("ArgumentError");
        }
    })
);

// 특정 일기 조회
diaryRouter.get(
    "/:id",
    auth,
    wrapRouter(async (req: Req, res: Res) => {
        const { id } = req.params;
        const result = await diaryService.getDiary(Number(id));
        return { statusCode: 200, content: result };
    })
);

// 일년 전, 한달 전,일주일전 일기를 다 가져오기
diaryRouter.get(
    "/period/all",
    auth,
    wrapRouter(async (req: Req, res: Res) => {
        // const now = new Date();
        // const year = now.getFullYear();
        // const month = now.getMonth() + 1;
        // const date = now.getDate();

        // const day = `${year}-${month >= 10 ? month : "0" + month}-${
        //     date >= 10 ? date : "0" + date
        // }`;

        // // week 기간 설정
        // const weekStart = new Date(day);
        // weekStart.setDate(new Date().getDate() - 7);

        // const weekEnd = new Date(weekStart);
        // weekEnd.setDate(weekStart.getDate() + 1);

        // // month 기간 설정
        // const monthStart = new Date(day);
        // monthStart.setMonth(new Date().getMonth() - 1);

        // const monthEnd = new Date(monthStart);
        // monthEnd.setDate(monthStart.getDate() + 1);

        // // year 기간 설정
        // const yearStart = new Date(day);
        // yearStart.setFullYear(new Date().getFullYear() - 1);

        // const yearEnd = new Date(yearStart);
        // yearEnd.setDate(yearStart.getDate() + 1);

        const week = dayjs().subtract(1, "week");
        const month = dayjs().subtract(1, "month");
        const year = dayjs().subtract(1, "year");

        console.log(week.format("YYYY-MM-DD"));
        console.log(month.format("YYYY-MM-DD"));
        console.log(year.format("YYYY-MM-DD"));

        const result = await Promise.all([
            diaryService.getDiaryByPeriod(req.userID!, week),
            diaryService.getDiaryByPeriod(req.userID!, month),
            diaryService.getDiaryByPeriod(req.userID!, year),
        ]);

        return { statusCode: 200, content: { week: result[0], month: result[1], year: result[2] } };
    })
);

// 일기 수정
diaryRouter.patch(
    "/:id",
    auth,
    wrapRouter(async (req: Req, res: Res) => {
        const { id } = req.params;
        const { title, description, weather, emotion, lock } = req.body;

        if (
            typeof title !== "string" ||
            typeof description !== "string" ||
            typeof weather !== "string" ||
            typeof emotion !== "string" ||
            typeof lock !== "boolean"
        ) {
            throw new AppError("ArgumentError");
        }

        const result = await diaryService.updateDiary(
            Number(id),
            title,
            description,
            weather,
            emotion,
            Boolean(lock)
        );
        return Promise.resolve({ statusCode: 200, content: result });
    })
);

// delete
diaryRouter.delete(
    "/:id",
    auth,
    wrapRouter(async (req: Req, res: Res) => {
        const { id } = req.params;
        const result = await diaryService.deleteDiary(Number(id));
        return Promise.resolve({ statusCode: 200, content: result });
    })
);

//공감 증가 API
diaryRouter.put(
    "/:id/likes",
    auth,
    wrapRouter(async (req: Req, res: Res) => {
        const { id } = req.params;
        const { amount } = req.body;

        if (typeof amount !== "number") {
            throw new AppError("ArgumentError");
        }

        const result = await diaryService.addLikes(Number(id), amount);
        return { statusCode: 200, content: result };
    })
);

export default diaryRouter;
