import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Button, TextField, Checkbox, FormControlLabel } from '@material-ui/core';
import Logo from "./Logo";
const useStyle = makeStyles({  // useStyle 적용 안됨 
    text: {
        margin: 5,
    }
});


export default function Signup() {
    const classes = useStyle;
    return (
        <div style={{height:1200}}>
            <Logo></Logo>

            <div className="space"></div>
            <div className="item-align">

                <h2>Sign Up</h2>
                <div className="space"></div>
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
                        variant="outlined" />
                </div>
                <div>
                    <TextField
                        style={{ margin: 5, width: 250 }}
                        id="password-signup"
                        label="비밀번호"
                        type="password"
                        variant="outlined" />

                </div>

                
                <br></br><br></br>
                <FormControlLabel
                    control=
                    {
                        <Checkbox color="primary" />
                    }
                    label="가입하면 Chinstagram의 약관, 데이터 정책 및 쿠키 정책에 동의하게 됩니다."
                />
                <br></br>
                <Button style={{ margin: 10 }} variant="contained" color="primary">회원가입</Button>
                <div className="space"></div>

            </div>
        </div>

    );

}
