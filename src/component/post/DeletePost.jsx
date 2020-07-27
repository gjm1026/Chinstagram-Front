import React from 'react';
import {withRouter} from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import "../item.css";

function DeletePost(props) {
  const onClickCancel = () => {
      props.history.goBack();
  };

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
        style={{ float: "center" }}
      >
        <DialogTitle id="responsive-dialog-title" style={{ width: 400 }}>
          {"삭제하시겠습니까?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText></DialogContentText>
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

export default withRouter(DeletePost);