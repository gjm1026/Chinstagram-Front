import React, { useState } from "react";
import ChinstagramApi from "../../chinstagramAPI/ChinstagramAPI";
import {
  Button,
  TextField,
  Checkbox,
  FormControlLabel,
} from "@material-ui/core";
import Logo from "../logo/Logo";
import "../item.css";

export default function Signup(props) {
  // const regularExpression = {
  //   id: /^[a-z]+[a-z0-9]{5,19}$/g, // 영소문자+숫자
  //   email: /^([0-9a-zA-Z_-]+)@([0-9a-zA-Z_-]+)(\.[0-9a-zA-Z_-]+){1,2}$/,
  //   name: /^[가-힣]{2,4}|[a-zA-Z]{2,10}\s[a-zA-Z]{2,10}$/, // 한글+영문
  //   pw: /^[A-Za-z0-9]{6,12}$/, // 영문+숫자
  // };
  const [user, setUser] = useState({
    id: "",
    email: "",
    name: "",
    pw: "",
  });

  const [term, setTerm] = useState(false);
  const [termError, setTermError] = useState(false);

  // const validCheck= {
  //   id: false,
  //   email: false,
  //   name: false,
  //   pw: false
  // };

  const userHandle = (v) => (e) => {
    setUser({
      ...user,
      [v]: e.target.value,
    });
  };

  const onChangeTerm = (e) => {
    setTermError(!term);
    setTerm(!term);
  };

  const onSubmitSignup = (e) => {
    e.preventDefault();
    if (!term) {
      return setTermError(true);
    }
    ChinstagramApi.post("/user/signup", user)
      .then((res) => {
        console.log("회원가입 성공", res.data);
        props.history.replace("/user/login");
      })
      .catch((err) => {
        console.log("회원가입 실패", err);
      });
  };



  return (
    <div style={{ height: 1200 }}>
      <Logo></Logo>

      <div className="space"></div>
      <div className="item-align">
        <h2 style={{ marginTop: 50, marginBottom: 50 }}>Sign Up ෆ</h2>
        <form onSubmit={onSubmitSignup}>
          <div>
            <TextField
              name="user-nickname"
              value={user.id}
              required
              onChange={userHandle("id")}
              style={{ margin: 5, width: 250 }}
              label="닉네임"
              variant="outlined"
            />
          </div>
          <div>
            <TextField
              name="user-email"
              value={user.email}
              required
              onChange={userHandle("email")}
              style={{ margin: 5, width: 250 }}
              label="이메일 주소"
              variant="outlined"
              
            />
          </div>
          <div>
            <TextField
              name="user-name"
              value={user.name}
              required
              onChange={userHandle("name")}
              style={{ margin: 5, width: 250 }}
              label="이름"
              variant="outlined"
              
            />
          </div>

          <div>
            <TextField
              name="user-password"
              value={user.pw}
              required
              onChange={userHandle("pw")}
              style={{ margin: 5, width: 250 }}
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
                >
                  동의하십니까?
                </Checkbox>
                {termError && (
                  <div style={{ color: "red", fontWeight: "bold" }}>
                    동의 필수!
                  </div>
                )}
              </div>
            }
            label="가입하면 Chinstagram의 약관, 데이터 정책 및 쿠키 정책에 동의하게 됩니다."
          />
          <br></br>
          <Button
            type="submit"
            style={{ margin: 10 }}
            variant="contained"
            color="primary"
          >
            회원가입
          </Button>
        </form>
        <div className="space"></div>
      </div>
    </div>
  );
}
