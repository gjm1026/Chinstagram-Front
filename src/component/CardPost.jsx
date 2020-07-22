import React, {useState, useEffect} from 'react';
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
        marginBottom: 30,
        float: 'left',
        width: 480,

    },
}));

export default function CardPost(props) {

    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);

    const [likes, setCount] = useState(0);


    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;


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
                                    <div style={{ margin: 15 }}>수정</div>
                                    <div style={{ margin: 15 }}>삭제</div>
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
                            <IconButton aria-label="add to favorites" onClick={()=>setCount(likes+1)}>
                                <FavoriteIcon />
                            </IconButton>
                        </div>
                        <div className="like-text" ><br></br>좋아요 {likes}개</div>
                    </div>
                    <div style={{marginTop:20, marginBottom:10}}>
                    <Typography variant="body1" color="textSecondary" component="p">
                        내용내용
                    </Typography>
                    </div>
                    <div className="card-comment-nickname">jeongmin</div>
                    <div>#예쁜하늘 #갬성</div>


                    <TextField className={classes.comment} id="standard-basic" label="comment" />
                    <Button style={{ margin: 10 }} variant="contained">등록</Button>

                </CardContent>
            </Card>

        </div>
    );
}
