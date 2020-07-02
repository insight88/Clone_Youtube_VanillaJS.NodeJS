import routes from "../routes";
// home 화면에 표시할 sample videos를 fake db.js에서 가져옴
import Video from "../models/Video";

export const home = async (req, res) => {
// async : 이 함수의 어떤 부분이 꼭 비동기 작동이 필요하다는 선언
  try {
    const videos = await Video.find({});
    // await : Video.find() 과정이 끝날 때까지 기다리라는 의미
    // Video.~ 메소드는 몽구스같은 NoSQL에서 지원하는 쿼리 빌더에 정의된 메소드   =>   mongoose queries 문서에 있음
    // async, await는 같이 쓰임
    // 비동기 처리 시 try-catch로 에러 처리를 해줘야 함
    res.render("home", { pageTitle: "Home", videos });
  } catch (error) {
    console.log(error);
    res.render("home", { pageTitle: "Home", videos: [] });
  }
}

export const search = (req, res) => {
  const {
    query : { term: searchingBy }
  } = req;
  // const searchingBy = req.query.term 은 ES6 이전의 코딩 방식
  // const { query : { term } } = req 방식은 ES6의 새로운 코딩 방식
  // search.pug <- main.pug <- header.pug <- form.input으로 받은 term을 request로 받아 searchingBy로 저장,
  res.render("search", { pageTitle: "Search", searchingBy, videos });
  // 저장받은 searchingBy를 search.pug를 render할  전송, searchingBy:"searchingBy"의 줄임 표시
  // 화면을 render할 때 pageTitle 변수, videos라는 array를 같이 전송
};
// search.pug 화면에서 검색된 term을 { term:searchingBy }라는 query 형태로 저장
// term 이외의 조건들이 추가될 경우 (ex.sort, filter 등) query에 오브젝트 형태로 저장
// ex) query : { term:~, sort:~, filter:~ }     =>     URL에서  ?term=android&sort=alphabet&filter=down 

export const getUpload = (req, res) =>
  res.render("upload", { pageTitle: "Upload" });
// upload 페이지에 접속

export const postUpload = async (req, res) => {
  const {
    body: { title, description },
    file: { path }
  } = req;
  // title, decription은 html body에서 입력 받고, video file은 path를 받음
  const newVideo = await Video.create({
    fileUrl: path,
    title,
    description
  });
  res.redirect(routes.videoDetail(newVideo.id));
};
// upload 페이지에서 비디오 정보 입력 시 request로 받고, newVideo에 할당 된 id를 parameter로 videoDetail 페이지에 리디렉트

export const videoDetail = async (req, res) => {
  const {
    params: { id }
  } = req;
  try {
    const video = await Video.findById(id);
    res.render("videoDetail", { pageTitle: "Video Detail", video });
  } catch (error) {
    res.redirect(routes.home);
  }
};
// req로 받은 id를 이용해 Video.findById(id)에서 찾은 결과를 video에 저장
// video가 있을 경우 videoDetail을 render
// video가 없을 경우 home으로 redirect

export const getEditVideo = async (req, res) => {
  const {
    params: { id }
  } = req;
  try {
    const video = await Video.findById(id);
    res.render("editVideo", { pageTitle: `Edit ${video.title}`, video });
  } catch (error) {
    res.redirect(routes.home);
  }
};

export const postEditVideo = async (req, res) => {
  const {
    params: { id },
    body: { title, description }
  } = req;
  try {
    await Video.findOneAndUpdate({ _id: id }, { title, description });
    res.redirect(routes.videoDetail(id));
  } catch (error) {
    res.redirect(routes.home);
  }
};


export const deleteVideo = async (req, res) => {
  const {
    params: { id }
  } = req;
  try {
    await Video.findOneAndRemove({ _id: id });
  } catch (error) {}
  res.redirect(routes.home);
  // try에 해당하던 catch에 해당하던, delete를 실행하고난 후 home으로 redirect할거기 때문에 try-catch 바깥에 꺼냄
};

// (res,req) => res.render("home") : views 폴더에서 home.pug라는 파일을 찾아 html 형식으로 render
