import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Button, TextField } from '@material-ui/core';

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
                    id="email-input" 
                    label="이메일 주소" 
                    variant="outlined" 
                />
            </form>
            <form className={classes.text} noValidate autoComplete="off">
                <TextField 
                    style={{ margin: 5 }} 
                    id="name-input" 
                    label="이름" 
                    variant="outlined" 
                />
            </form>
            <form className={classes.text} noValidate autoComplete="off">
                <TextField 
                    style={{ margin: 5 }} 
                    id="nickname-input" 
                    label="닉네임" 
                    variant="outlined" />
            </form>
            <form className={classes.text} noValidate autoComplete="off">
                <TextField 
                    style={{ margin: 5 }} 
                    id="password-input" 
                    label="비밀번호" 
                    type="password" 
                    variant="outlined" />
            </form>
            <Button style={{ margin: 10 }} variant="contained" color="primary">회원가입</Button>
        </>
    );

}
