import express from "express";
import routes from "../routes";
import {
    videos,
    upload,
    videoDetail,
    editVideo,
    deleteVideo
  } from "../controllers/videoController";

const videoRouter = express.Router();

videoRouter.get(routes.videos, videos);
videoRouter.get(routes.upload, upload);
videoRouter.get(routes.videoDetail, videoDetail);
videoRouter.get(routes.editVideo, editVideo);
videoRouter.get(routes.deleteVideo, deleteVideo);

export default videoRouter;
// export default : 파일 전체로 export 한다는 뜻
// export const videoRouter : const videoRouter라는 변수만 export