import axios from "axios";

const Api = axios.create({
  baseURL: "http://3.19.14.212:8080/chinstagram",
  //baseURL: "http://localhost:8088",
});
Api.interceptors.request.use(
  (config) => {
    if (config.url.match("content")) {
      config.headers["Authorization"] = window.localStorage.getItem(
        "accessToken"
      );
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default Api;
