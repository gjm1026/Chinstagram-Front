import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from "./Card";
import Profile from "./Profile";

const useStyles = makeStyles((theme) => ({
  
}));

export default function Main() {
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (
        <>
        <h1>Chinstagram</h1>
        <Profile></Profile>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        </>
    );
}
