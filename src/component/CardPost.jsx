import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Popover from '@material-ui/core/Popover';
import FavoriteIcon from '@material-ui/icons/Favorite';
import { Button, TextField } from '@material-ui/core';
import DeletePost from "./DeletePost";
import "./item.css";

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 600,
        float: 'left',
        marginLeft: 150,
        width: 600,
        marginBottom: 120
    },
    media: {
        height: 0,
        paddingTop: '100.25%', // 16:9
    },
    comment: {
        marginBottom: 10,
        float: 'left',
        width: 480,

    },
}));

export default function CardPost(props){


    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);

    const [likes, setCount] = useState(0);

    const [commentList, setCommentList] = useState([]);
    const [comment, setComment] = useState("");

    const onClickEdit = () => 
    {
        window.location.href = "/editpost";
    };

    const onChange = e => 
    {
        setComment(e.target.value);
    };

    const onInsert = e =>
    {
        const nextList = commentList.concat(comment);
        setCommentList(nextList);
        setComment("");
    }

    const pressEnter = e =>
    {
        if(e.key == "Enter")
        {
            onInsert();
            e.target.value = "";
        }
    };

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;


    const [deletedialog, setDelete] = React.useState(false);
    //const theme = useTheme();

    const handleDeleteClose = () => {
        setDelete(false);
    };
    const handleClickOpen = () => {
        setDelete(true);
    };
    

    return (
        <div className="card-align">
            <Card className={classes.root}>
                <CardHeader
                    subheader="July 14, 2020"
                    action={
                        <div>
                            <IconButton aria-label="settings" onClick={handleClick}>
                                <MoreVertIcon />
                            </IconButton>
                            <Popover
                                id={id}
                                open={open}
                                anchorEl={anchorEl}
                                onClose={handleClose}
                                anchorOrigin={{
                                    vertical: 'bottom',
                                    horizontal: 'center',
                                }}
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'center',
                                }}
                            >
                                <div style={{ marginLeft: 15, marginRight: 15 }}>
                                    <div style={{ margin: 15 }} onClick={onClickEdit}>수정</div>
                                    <div style={{ margin: 15 }} onClick={handleClickOpen}>삭제</div>
                                </div>
                            </Popover>
                        </div>
                    }
                />
                <CardMedia
                    className={classes.media}
                    image="image.png"
                    title="sky"
                />
                <CardContent>
                    <div>
                        <div className="like-style">
                            <IconButton aria-label="add to favorites" onClick={() => setCount(likes + 1)}>
                                <FavoriteIcon />
                            </IconButton>
                        </div>
                        <div className="like-text" ><br></br>좋아요 {likes}개</div>
                    </div>
                    <div style={{ marginTop: 20, marginBottom: 10 }}>
                        <Typography variant="body1" color="initial" component="p">
                            파란 하늘 예뿌당 ٩(๑❛ᴗ❛๑)۶
                    </Typography>
                    </div>
                    


                    <TextField className={classes.comment} id="standard-basic" label="comment" onChange={onChange} onKeyPress={pressEnter}/>
                    <Button style={{ margin: 10 }} variant="contained" onClick={onInsert}>등록</Button>
                    <ul>
                        {commentList.map((value, index) => (
                            <li className="card-comment-style" key={index}>
                                <div className="card-comment-nickname">jeongmin</div>
                                <div style={{marginLeft:0, marginTop:5}}>{value}</div></li>
                        ))}
                    </ul>

                </CardContent>
            </Card>
            <DeletePost
            open={deletedialog}
            handleDeleteClose={() => setDelete(false)}
          />

        </div>
    );
}
