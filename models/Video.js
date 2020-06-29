import mongoose from "mongoose";
// schema는 형태, model은 data
const VideoSchema = new mongoose.Schema({
// Video의 정보가 DB에 어떤 형태로 저장되는지 정의하는 Schema, Object 형태
    fileUrl: {
        type: String,
        required: "File URL is required"
    },
    // fileUrl의 타입은 String임을 정의
    // required: fileUrl 선언이 필수적임, 선언되지 않을 시 위 메세지를 출력
    title: {
        type: String,
        required: "Title is required"
    },
    // configuration(required, default)가 필요한 경우 object 형태로 정의
    decription: String,
    // configuration이 필요없는 경우, data type만 한 줄로 적어도 됨
    views: {
        type: Number,
        default: 0
    },
    createAt: {
        type: Date,
        default: Date.now
    },
    comments: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Comment"
        }   
    ]
    // ref: "Comment" : Comment model을 reference로 설정
    // 해당 Video에 작성된 comment object들의 ID를 DB에 저장
});

const model = mongoose.model("Video", VideoSchema)
// VideoSchema 형태를 가진 data model을 생성
export default model;
// 위에 생성된 비디오 데이터 model을 export