import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CardPosts from "./CardPosts";
import { Button } from '@material-ui/core';
import Profile from "./Profile";

const useStyles = makeStyles((theme) => ({

}));

export default function Main() {


    return (
        <div style={{height:1800}}>
            <Profile></Profile>
            <div>
            <Button style={{ margin: 10, float : "right", width: 130, marginRight : 30 }} variant="contained" >+ Add Post</Button>
            </div>
            <div style={{marginTop : 150}}>
                <div><CardPosts></CardPosts></div>
                <div><CardPosts></CardPosts></div>
                <div><CardPosts></CardPosts></div>
                <div><CardPosts></CardPosts></div>
            </div>
        </div>
    );
}