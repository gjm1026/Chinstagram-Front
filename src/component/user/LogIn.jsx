import React, { useState } from "react";
import { Button, TextField } from "@material-ui/core";
import { Link } from "react-router-dom";
import Logo from "../logo/Logo";
import "../item.css";
import ChinstagramApi from "../../chinstagramAPI/ChinstagramAPI";


export default function LogIn(props) {
  const [login, setLogin] = useState({
    email: "",
    password: "",
  });

  const loginHandle = (v) => (e) => {
    setLogin({
      ...login,
      [v]: e.target.value,
    });
  };

  const onSubmitLogin = (e) => {
    e.preventDefault();
    // ChinstagramApi.post('')
    //   .then((res) => {
    //     console.log("로그인 성공");
    //     props.history.replace("/main");
    //   })
    //   .catch((err) => {
    //     console.log("로그인 실패");
    //   });
  };

  return (
    <div style={{ height: 1200 }}>
      <Logo></Logo>

      <div className="space"></div>
      <div className="item-align">
        <h2 style={{ marginTop: 50, marginBottom: 50 }}>Log In ෆ</h2>
        <form onSubmit={onSubmitLogin}>
          <div>
            <TextField
              required
              style={{ margin: 5, width: 250 }}
              value={login.email}
              label="이메일 또는 닉네임"
              variant="outlined"
              onChange={loginHandle("email")}
            />
          </div>
          <div>
            <TextField
              required
              style={{ margin: 5, width: 250 }}
              id="password-login"
              value={login.password}
              label="비밀번호"
              type="password"
              variant="outlined"
              onChange={loginHandle("password")}
            />
          </div>
          <p style={{ marginBottom: 20 }}>계정이 없으신가요?</p>
          <Link
            to="/signup"
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
