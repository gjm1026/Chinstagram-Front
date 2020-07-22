import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CardPost from "./CardPost";
import Profile from "./Profile";
import Logo from "./Logo"

const useStyles = makeStyles((theme) => ({
  
}));

export default function PostView() {
    

    return (
        <div style={{height:1200}}>
        <Logo></Logo>
        <CardPost></CardPost>
        </div>
    );
}
