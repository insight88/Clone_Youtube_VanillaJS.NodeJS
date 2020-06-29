import routes from "../routes";

export const getJoin = (req, res) => {
    res.render("join", { pageTitle: "Join" });
};

export const postJoin = (req, res) => {
    const {
        body: { name, email, password, password2 }
    } = req;
    // join.pug의 body에서 입력받은 값들을 request로 받아서 query에 저장
    if (password !== password2) {
        res.status(400);
        res.render("join", { pageTitle: "Join" });
    // pw 확인이 만족되지 않을 시, status code 400을 respond하고 join 페이지로 돌아가기
    } else {
        // To Do: Register User
        // To Do: Log user in
        res.redirect(routes.home);
    }
    // pw 확인 통과 시, home 화면으로 redirect
};

export const getLogin = (req, res) =>
    res.render("login", { pageTitle: "Log In" });
export const postLogin = (req, res) => {
    res.redirect(routes.home);
};

export const logout = (req, res) => {
    // To Do: Process Log Out
    res.redirect(routes.home);
};

export const userDetail = (req, res) => res.render("userDetail", { pageTitle: "User Detail" });
export const editProfile = (req, res) => res.render("editProfile", { pageTitle: "Edit Profile" });
export const changePassword = (req, res) => res.render("changePassword", { pageTitle: "Change Password" });