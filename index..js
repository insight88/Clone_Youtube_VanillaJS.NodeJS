// npm init
// npm install express
// npm install morgan - logging을 도와주는 middleware
// npm install helmet - 보안을 도와주는 middleware
// npm install cookie-parser - 쿠키 해석을 도와주는 middleware
// npm install body-parser - HTML body의 입력을 해석하는 middleware
// babel을 사용하려면 npm install @babel/core를 프롬프트에서 실행

import express from "express";
// node 모듈에서 express 호출하기
import morgan from "morgan";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
const app = express();
// express 실행, 어플리케이션 생성

const PORT = 4000;
// PORT값 4000 설정

const handleListening = () =>
  console.log(`Listening on: http://localhost:${PORT}`);
// arrow function,  함수 이름 = (arguements) => 함수 기능 명령
// implicit return, {}없이 적을 경우 arrow의 오른쪽 값을 암시적으로 return
// arrow의 오른쪽에 {}를 적을 경우 implicit return 기능이 작동하지 않아 return 명령어가 필요

const handleHome = (req, res) => res.send("Hello from my home");
// response, / 페이지를 불러와서 "~"를 응답
  
const handleProfile = (req, res) => res.send("You are on my profile");
// response, profile 페이지를 불러와서 "~"를 응답

// const betweenHome = (req, res, next) => {
//     console.log("Between");
//     next();
// };
// betweenHome middleware 함수, req, res, next 3개의 arguement가 있음
// middleware는 라우트를 부르기 전 원하는 만큼 여러 개 설정해도 됨
  
// app.use(betweenHome);   
// middleware, route를 부르기 전에 실행되는 명령, software
// middleware는 양파 구조, 여러 겹을 쌓고 마지막 겹에 send로 return
// middleware 위치가 get 라우트 위에 존재하면 전역으로 적용
// middleware 위치가 get 라우트 함수 가운데에 존재하면 그 함수를 부를 때만 적용

app.use(cookieParser());
app.use(bodyParser.json());
// bodyparser을 이용하여 json을 해석
app.use(bodyParser.urlencoded({ extended: true }));
// bodyparser를 이용하여 urlencoded - extended를 해석
app.use(helmet());
app.use(morgan("dev"));
// morgan mode들 중에서 dev 모드로 지정

app.get("/", handleHome);

app.get("/profile", handleProfile);

app.listen(PORT, handleListening);
// 어플리케이션이 PORT를 listen하기 시작하면 handleListening 실행

// URL에 접속하면 브라우저가 웹페이지를 읽어와서 GET(method)
// URL에 접속하면 브라우저가 웹페이지에 로긴할 때 정보를 POST(method)