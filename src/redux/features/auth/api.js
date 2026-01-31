import Project from "../../../https/configs";

export const registerApi = (payload) => {
  return Project.post("/jwt/register", payload);
};
//API for Login
export const loginApi = (payload) => {
  return Project.post("/jwt/login", payload);
};

//Check Session
export const checkSessionApi = () => {
  return Project.get("/jwt/check-session");
};

//login with google
export const googleSignIn = (payload) =>
  Project.get("https://www.googleapis.com/oauth2/v3/userinfo", {
    headers: {
      Authorization: `Bearer ${payload}`,
    },
  });
