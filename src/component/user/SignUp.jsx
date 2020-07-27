import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Button,
  TextField,
  Checkbox,
  FormControlLabel,
} from '@material-ui/core';
import Logo from "../logo/Logo";
import "../item.css";

export default function Signup(props) {
  //     const onClickNotChecked = () =>
  //     {
  //         window.location.href = "/signup";
  //     }

  //     const [check, setCheck] = useState(false);
  //     const onClick = e => {
  //     setCheck(e.target.checked);
  //   };

  const [term, setTerm] = useState(false);
  const [termError, setTermError] = useState(false);
  const onSubmit = (e) => {
    e.preventDefault();
    if (!term) {
      return setTermError(true);
    }
    console.log({
      term,
    });
  };
  const onChangeTerm = (e) => {
    //체크박스 초기화
    setTermError(false);
    setTerm(e.target.checked);
  };

  return (
    <div style={{ height: 1200 }}>
      <Logo></Logo>

      <div className="space"></div>
      <div className="item-align">
        <h2 style={{ marginTop: 50, marginBottom: 50 }}>Sign Up ෆ</h2>
        <div>
          <TextField
            style={{ margin: 5, width: 250 }}
            id="email-signup"
            label="이메일 주소"
            variant="outlined"
          />
        </div>
        <div>
          <TextField
            style={{ margin: 5, width: 250 }}
            id="name-signup"
            label="이름"
            variant="outlined"
          />
        </div>
        <div>
          <TextField
            style={{ margin: 5, width: 250 }}
            id="nickname-signup"
            label="닉네임"
            variant="outlined"
          />
        </div>
        <div>
          <TextField
            style={{ margin: 5, width: 250 }}
            id="password-signup"
            label="비밀번호"
            type="password"
            variant="outlined"
          />
        </div>

        <br></br>
        <br></br>
        <FormControlLabel
          control={
            <div>
              <Checkbox
                name="valid"
                color="primary"
                value={term}
                onChange={onChangeTerm}
              />
              {termError && (
                <div style={{ color: "red" }}>약관에 동의하셔야 합니다.</div>
              )}
            </div>
          }
          label="가입하면 Chinstagram의 약관, 데이터 정책 및 쿠키 정책에 동의하게 됩니다."
        />
        <br></br>
        <Link to="/">
          <Button style={{ margin: 10 }} variant="contained" color="primary">
            회원가입
          </Button>
        </Link>
        <div className="space"></div>
      </div>
    </div>
  );
}
