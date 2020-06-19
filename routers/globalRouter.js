import express from "express";
import routes from "../routes";
// routes.js가 routers 폴더 밖에 있으니까 ../
import { home, search } from "../controllers/videoController";
import { join, login, logout } from "../controllers/userController";
// 각 Controller 파일에서 function(controller)를 참조

const globalRouter = express.Router();

globalRouter.get(routes.home, home);
globalRouter.get(routes.search, search);
globalRouter.get(routes.join, join);
globalRouter.get(routes.login, login);
globalRouter.get(routes.logout, logout);
// get(routes.js에서 참조한 주소, ~Controller.js에서 참조한 함수)

export default globalRouter;