import routes from "./routes";

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

// res.locals.변수명 : middleware가 호출될 때 로컬변수를 전역변수로 활용