import "./db"
import app from "./app";
// 해당 폴더에서 app.js 파일을 import
import dotenv from "dotenv";
dotenv.config();
// .env파일에 git에서 추적하지 못하는 키를 설정
import "./models/Video";
// video Schema와 model이 저장되어있는 Video.js를 import
import "./models/Comment";

const PORT = process.env.PORT || 4000;
// .env 파일에 MONGO_URL 키값으로 저장된 주소를 PORT로 설정

const handleListening = () =>
  console.log(`✅ Listening on: http://localhost:${PORT}`);

app.listen(PORT, handleListening);