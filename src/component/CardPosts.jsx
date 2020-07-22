import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Profile from './Profile';

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 500,
        float : 'left',
        marginLeft : 120,
        width : 400,
        marginBottom : 100,
        marginTop : 0
    },
    media: {
        height: 0,
        paddingTop: '100.25%', // 16:9
    },
}));

export default function CardPosts() {

    const classes = useStyles();
    

    return (
        <div>
        <Card className={classes.root}>
            <CardHeader
                subheader="July 14, 2020"
            />
            <CardMedia
                className={classes.media}
                image="/static/images/cards/paella.jpg"
                title="Paella dish"
            />
            <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                    내용내용
                </Typography>
            </CardContent>
        </Card>
        </div>
    );
}
