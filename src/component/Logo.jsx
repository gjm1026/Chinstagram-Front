import React from 'react';
import "./logo.css";
import { makeStyles } from "@material-ui/core/styles";



export default function Main() {

    const onClickLogo = () => 
    {
        window.location.href = "/main";
    };

    return (
        <div>
            
                <div className="logo-font" onClick={onClickLogo}>Chinstagram</div>
                <br></br><br></br>
                <div className="border-style"></div>
        </div>
    );
}