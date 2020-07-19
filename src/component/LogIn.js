import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Button, TextField } from '@material-ui/core';

const useStyle = makeStyles({  // useStyle 적용 안됨 
    text: {
        margin: 5,
    }
});


export default function LogIn() {
    const classes = useStyle;
    return (
        <>
            <h1>Chinstagram</h1>
            <form className={classes.text} noValidate autoComplete="off">
                <TextField 
                    style={{ margin: 5 }}
                    id="email-login" 
                    label="이메일 또는 닉네임" 
                    variant="outlined" 
                />
            </form>
            <form className={classes.text} noValidate autoComplete="off">
                <TextField 
                    style={{ margin: 5 }} 
                    id="password-login" 
                    label="비밀번호" 
                    type="password" 
                    variant="outlined" />
            </form>

            <p>계정이 없으신가요?</p> <a style={{color:"blue"}}>가입하기</a> 
            <br></br>
            <Button style={{ margin: 10 }} variant="contained" color="primary">로그인</Button>
        </>
    );

}
