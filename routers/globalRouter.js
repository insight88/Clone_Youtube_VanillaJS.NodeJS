import express from "express";
import routes from "../routes";
// routes.js가 routers 폴더 밖에 있으니까 ../
import { home, search } from "../controllers/videoController";
import { getJoin, postJoin, getLogin, postLogin, logout } from "../controllers/userController";
// 각 Controller 파일에서 정의되어 있는 function(controller)를 참조

const globalRouter = express.Router();
// globalRouter가 user request에 대해서 여러 루트로 분기되는 역할을 수행하도록 선언
globalRouter.get(routes.join, getJoin);
globalRouter.post(routes.join, postJoin);
// get 메소드 : read only, 성공 시 200 HTML code와 함께 XML (or) JSON을 리턴, URL 뒤에 ?term=text을 추가
// post 메소드 : 새로운 리소스를 생성, 서버로 전송할 때 추가적인 데이터를 body에 포함할 수 있음

globalRouter.get(routes.login, getLogin);
globalRouter.post(routes.login, postLogin);

globalRouter.get(routes.home, home);
globalRouter.get(routes.search, search);
globalRouter.get(routes.logout, logout);
// get(routes.js에서 참조한 주소, ~Controller.js에서 참조한 함수)

export default globalRouter;