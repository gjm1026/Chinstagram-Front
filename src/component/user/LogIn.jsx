import React, { useState } from "react";
import { Button, TextField } from "@material-ui/core";
import { Link } from "react-router-dom";
import Logo from "../logo/Logo";
import "../item.css";
import ChinstagramApi from "../../chinstagramAPI/ChinstagramAPI";

export default function LogIn(props) {
  const [login, setLogin] = useState({
    id: "",
    pw: "",
  });

  const loginHandle = (v) => (e) => {
    setLogin({
      ...login,
      [v]: e.target.value,
    });
  };

  const onSubmitLogin = (e) => {
    e.preventDefault();
    ChinstagramApi({
      method: "post",
      url: "/login",
      data: login,
    })
      .then((res) => {
        console.log("로그인 성공", res.data);
        exLogin(res.data);
      })
      .catch((err) => {
        console.log("로그인 실패", err);
        // 에러코드 처리
      });
  };

  const exLogin = (e) => {
    window.localStorage.setItem("id", e.id);
    window.localStorage.setItem("accessToken", e.token);
    props.history.push("/content");
  };

  return (
    <div>
      <Logo></Logo>

      <div className="space"></div>
      <div className="item-align">
        <h2 style={{ marginTop: 50, marginBottom: 50 }}>Log In ෆ</h2>
        <form onSubmit={onSubmitLogin}>
          <div>
            <TextField
              required
              style={{ margin: 5, width: 250 }}
              value={login.id}
              label="이메일 또는 닉네임"
              variant="outlined"
              onChange={loginHandle("id")}
            />
          </div>
          <div>
            <TextField
              required
              style={{ margin: 5, width: 250 }}
              id="password-login"
              value={login.pw}
              label="비밀번호"
              type="password"
              variant="outlined"
              onChange={loginHandle("pw")}
            />
          </div>
          <p style={{ marginBottom: 20 }}>계정이 없으신가요?</p>
          <Link
            to="/user/signup"
            style={{
              color: "blue",
              marginBottom: 30,
              textDecoration: "inherit",
            }}
          >
            가입하기
          </Link>
          <br></br>
          <Button
            type="submit"
            style={{ margin: 10, marginTop: 30 }}
            variant="contained"
            color="primary"
          >
            로그인
          </Button>
        </form>
        <div className="space"></div>
      </div>
    </div>
  );
}
