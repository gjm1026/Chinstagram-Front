import axios from "axios";

const Api = axios.create({
  baseURL: "http://3.19.14.212:8080/chinstagram",
  //baseURL: "http://localhost:8088",
});

export default Api;
