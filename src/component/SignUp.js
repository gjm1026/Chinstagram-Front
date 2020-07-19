import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Button, TextField, Checkbox, FormControlLabel } from '@material-ui/core';

const useStyle = makeStyles({  // useStyle 적용 안됨 
    text: {
        margin: 5,
    }
});


export default function Signup() {
    const classes = useStyle;
    return (
        <>
            <h1>Chinstagram</h1>
            <form className={classes.text} noValidate autoComplete="off">
                <TextField
                    style={{ margin: 5 }}
                    id="email-signup"
                    label="이메일 주소"
                    variant="outlined"
                />
            </form>
            <form className={classes.text} noValidate autoComplete="off">
                <TextField
                    style={{ margin: 5 }}
                    id="name-signup"
                    label="이름"
                    variant="outlined"
                />
            </form>
            <form className={classes.text} noValidate autoComplete="off">
                <TextField
                    style={{ margin: 5 }}
                    id="nickname-signup"
                    label="닉네임"
                    variant="outlined" />
            </form>
            <form className={classes.text} noValidate autoComplete="off">
                <TextField
                    style={{ margin: 5 }}
                    id="password-signup"
                    label="비밀번호"
                    type="password"
                    variant="outlined" />
            </form>
            <FormControlLabel
                control =
                {
                    <Checkbox color="primary"/>
                }
                label="가입하면 Chinstagram의 약관, 데이터 정책 및 쿠키 정책에 동의하게 됩니다."
            />
            <br></br>
            <Button style={{ margin: 10 }} variant="contained" color="primary">회원가입</Button>
        </>
    );

}
