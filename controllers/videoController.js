import routes from "../routes";
// home 화면에 표시할 sample videos를 fake db.js에서 가져옴
export const home = (req, res) => {
  res.render("home", { pageTitle: "Home", videos });
};
// home 화면을 render할 때 videos 데이터를 같이 전송

export const search = (req, res) => {
  const {
    query : { term: searchingBy }
  } = req;
  // const searchingBy = req.query.term 은 ES6 이전의 코딩 방식
  // const {} = req 방식은 ES6의 새로운 코딩 방식
  res.render("search", { pageTitle: "Search", searchingBy, videos });
};
// search 화면이 render될 때, pageTitle과 searchingBy를 pug 파일에 전송, searchingBy : "searchingBy"의 줄임 표시
// 검색된 term을 {term:searchingBy}라는 query 형태로 저장
// term 이외의 조건들이 추가될 경우 (ex.sort, filter 등) query에 오브젝트 형태로 저장
// ?term=android&sort=alphabet&filter=down

export const getUpload = (req, res) =>
  res.render("upload", { pageTitle: "Upload" });
// upload 페이지에 접속

export const postUpload = (req, res) => {
  const {
    body: { file, title, description }
  } = req;
  // To Do: Upload and save video
  res.redirect(routes.videoDetail(324393));
};
// upload 페이지에서 비디오 정보 입력 시 request로 받고 videoDetail 페이지로 리디렉트

  export const videoDetail = (req, res) =>
  res.render("videoDetail", { pageTitle: "Video Detail" });

  export const editVideo = (req, res) =>
  res.render("editVideo", { pageTitle: "Edit Video" });

  export const deleteVideo = (req, res) =>
  res.render("deleteVideo", { pageTitle: "Delete Video" });

// (res,req) => res.render("home") : views 폴더에서 home.pug라는 파일을 찾아 html 형식으로 render