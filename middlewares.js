import routes from "./routes";
import multer from "multer";
// npm install multer
// multer : 사용자가 업로드한 파일을 처리하는 module

const multerVideo = multer({ dest: "uploads/videos/" });
// dest : 파일이 업로드 되는 destination ("videos/")

export const localsMiddleware = (req, res, next) => {
  res.locals.siteName = "WeTube";
  res.locals.routes = routes;
  res.locals.user = {
    isAuthenticated: true,
    id: 1
  };
  // 인증된 가짜 유저를 설정하기 위한 미들웨어 조작
  next();
};

export const uploadVideo = multerVideo.single("videoFile");
// single("videoFile") : videoFile 포맷의 파일 하나를 업로드 하겠다는 의미

// res.locals.변수명 : middleware가 호출될 때 로컬변수를 전역변수로 활용