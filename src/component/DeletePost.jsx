import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
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

export default function DeletePost(props) {
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));

    const onClickCancel = () => {
        window.location.href = "/detail";
    }


    const { open, handleDelteClose } = props;


    return (
        <div>
            {/* <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Open responsive dialog
      </Button> */}
            <Dialog
                
                open={open}
                onClose={handleDelteClose}
                aria-labelledby="responsive-dialog-title"
                style={{float:"center"}}
            >
                <DialogTitle id="responsive-dialog-title" style={{width:400}}>{"삭제하시겠습니까?"}</DialogTitle>
                <DialogContent>
                    <DialogContentText>
          </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button autoFocus onClick={handleDelteClose} color="primary">
                        삭제
          </Button>
                    <Button onClick={onClickCancel} color="primary" autoFocus>
                        취소
          </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
