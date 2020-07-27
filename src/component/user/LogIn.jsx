import React from 'react';
import { Button, TextField } from '@material-ui/core';
import { Link } from 'react-router-dom';
import Logo from "../logo/Logo";
import "../item.css";

export default function LogIn(props) {
  return (
    <div style={{ height: 1200 }}>
      <Logo></Logo>

      <div className="space"></div>
      <div className="item-align">
        <h2 style={{ marginTop: 50, marginBottom: 50 }}>Log In ෆ</h2>
        <div>
          <TextField
            style={{ margin: 5, width: 250 }}
            id="email-login"
            label="이메일 또는 닉네임"
            variant="outlined"
          />
        </div>
        <div>
          <TextField
            style={{ margin: 5, width: 250 }}
            id="password-login"
            label="비밀번호"
            type="password"
            variant="outlined"
          />
        </div>
        <p style={{ marginBottom: 20 }}>계정이 없으신가요?</p>{" "}
        <Link
          to="/signup"
          style={{ color: "blue", marginBottom: 30, textDecoration: "inherit" }}
        >
          가입하기
        </Link>
        <br></br>
        <Link to="/main">
          <Button
            style={{ margin: 10, marginTop: 30 }}
            variant="contained"
            color="primary"
          >
            로그인
          </Button>
        </Link>
        <div className="space"></div>
      </div>
    </div>
  );
}
