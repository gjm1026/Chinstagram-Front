import React, { useState } from "react";
import ChinstagramApi from "../../chinstagramAPI/ChinstagramAPI";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import { Button, TextField } from "@material-ui/core";
import Logo from "../logo/Logo";
import "../item.css";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 600,
    float: "left",
    marginLeft: 150,
    width: 600,
    marginBottom: 120,
  },
  media: {
    height: 0,
    paddingTop: "100.25%", // 16:9
  },
  comment: {
    marginBottom: 10,
    float: "left",
    width: 480,
  },
}));

export default function UploadPost(props) {
  const classes = useStyles();
  const [images, setImageFile] = useState([
    {
      name: "",
      path: "",
    },
  ]);

  const [script, setScript] = useState("");
  const token = window.localStorage.getItem("accessToken");
  const scriptHandle = (e) => {
    setScript(e.target.value);
  };
  const imageFileHandle = (e) => {
    setImageFile([e.target.value]);
  };

  const onClickCancel = () => {
    props.history.goBack();
  };

  const onSubmitUpload = (e) => {
    e.preventDefault();
    ChinstagramApi({
      method: "POST",
      url: "/content",
      header:{
        Authorization: token,
        'content-type' : 'multipart/form-data'
      },
      data: {
        id : 1111,
        script: script,
        images: [{
          name: images.name,
          path: images.path
        }],
      },
    })
      .then((res) => {
        console.log("업로드 성공");
        props.history.replace("/content");
      })
      .catch((err) => {
        console.log("업로드 실패", err);
      });
  };

  return (
    <div>
      <Logo></Logo>
      <div className="card-align">
        <Card className={classes.root}>
          {/* <form onSubmit={onSubmitUpload}> */}
            <CardHeader subheader="July 14, 2020" action={<div></div>} />
            <CardMedia style={{ height: 300 }}>
              <div style={{ marginTop: 250, marginLeft: 150 }}>
              <form method="post"  encType="multipart/form-data">
                <input
                  name="images"
                  value={images.path}
                  onChange={imageFileHandle}
                  type="file"
                  style={{ marginLeft: 20 }}
                  multiple
                ></input>
                </form>
              </div>
            </CardMedia>
            <CardContent>
              <div style={{ marginTop: 20, marginBottom: 10 }}>
                <TextField
                  value={script}
                  style={{ margin: 5, width: 550 }}
                  multiline
                  rows={3}
                  id="upload-script"
                  label="내용을 입력하세용 ٩(๑❛ᴗ❛๑)۶"
                  variant="outlined"
                  onChange={scriptHandle}
                />
              </div>

              <div style={{ float: "right", marginBottom: 20 }}>
                <Button
                  type="submit"
                  style={{ margin: 10, width: 100 }}
                  variant="contained"
                  onClick={onSubmitUpload}
                >
                  업로드
                </Button>
                <Button
                  style={{ margin: 10, width: 100 }}
                  variant="contained"
                  onClick={onClickCancel}
                >
                  취소
                </Button>
              </div>
            </CardContent>
          {/* </form> */}
        </Card>
      </div>
    </div>
  );
}
