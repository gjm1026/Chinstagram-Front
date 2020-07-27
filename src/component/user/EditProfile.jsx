import React from 'react';
import { Button, TextField } from '@material-ui/core';
import profilephoto from "../../profile1.png"
import Logo from "../logo/Logo";
import "../item.css";

export default function EditProfile(props) {
  const onClickCancel = () => {
    props.history.goBack();
  };

  return (
    <div>
      <Logo></Logo>
      <div>
        <div className="profile-image">
          <img src={profilephoto}></img> <br></br>
          <input
            style={{
              marginLeft: 30,
              width: 100,
              float: "inherit",
              marginTop: 15,
            }}
            type="file"
          ></input>
          {/* <Button variant="contained">이미지 변경하기</Button> */}
        </div>
        <div className="profile-info">
          <br></br>
          <div className="nickname">jeongmin</div>
          <br></br>
          <div style={{ marginBottom: 10 }}>
            <TextField
              style={{ margin: 5, width: 550 }}
              multiline
              rows={3}
              id="edit-script"
              label="자기소개 수정하기 ٩(๑❛ᴗ❛๑)۶"
              variant="outlined"
            />
          </div>
        </div>
        <div style={{ marginLeft: 1000 }}>
          <Button style={{ margin: 10, width: 100 }} variant="contained">
            수정
          </Button>
          <Button
            style={{ margin: 10, width: 100 }}
            variant="contained"
            onClick={onClickCancel}
          >
            취소
          </Button>
        </div>
      </div>
    </div>
  );
}
