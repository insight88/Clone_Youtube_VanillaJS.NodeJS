import mongoose from "mongoose";
// mongoose : javascript에서 mongoDB이해할 수 있게 만드는 module
import dotenv from "dotenv";
dotenv.config();

mongoose.connect(
    process.env.MONGO_URL,
    {
        useNewUrlParser: true,
        useFindAndModify: false
    }
)
// String으로 된 Database를 요청, 어디에 Database가 저장되어있는지 알려줌
// mongodb://localhost:포트번호/Database이름

const db = mongoose.connection;

const handleOpen = () => console.log("✅ Connected to DB");
const handleError = error => console.log(`❌ Error on DB Connection : ${error}`);

db.once("open", handleOpen);
db.on("error", handleError);