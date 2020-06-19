import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import userRouter from "./routers/userRouter";
import videoRouter from "./routers/videoRouter";
import globalRouter from "./routers/globalRouter";
import routes from "./routes";

const app = express();

app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(helmet());
app.use(morgan("dev"));

app.use(routes.home, globalRouter);
app.use(routes.users, userRouter);
app.use(routes.videos, videoRouter);
// routes.~ 로 접속하면 routes.js에 있는 페이지 리스트에서 해당 오브젝트에 대응하는 주소를 사용

export default app;
// app.js를 default로 전부 export -> init.js에서 호출

// M : data (model)
// V : how does the data look (view)
// C : function that looks for the data (control)
// URL, 함수를 분리