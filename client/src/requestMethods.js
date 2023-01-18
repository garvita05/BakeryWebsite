import axios from "axios";

const BASE_URL = "http://localhost:5000/api/";
const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyZTYyYWVkZTYzZWNlMDMzZTA0NmJkYiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY1OTM3NzA0NywiZXhwIjoxNjU5NjM2MjQ3fQ.ibJstuaBWI_R8-m5bq74-abEspYoQcMFLm0Co6Ejqzs";
// const TOKEN =
//   JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser
//     .accessToken || "";

const user = JSON.parse(localStorage.getItem("persist:root"))?.user;
const currentUser = user && JSON.parse(user).currentUser;
// const TOKEN = currentUser?.accessToken;

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  header: { token: `Bearer ${TOKEN}` },
});
