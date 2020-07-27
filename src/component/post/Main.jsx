import React from 'react';
import { Link } from 'react-router-dom';
import CardPost from "./CardPost";
import { Button } from '@material-ui/core';
import Profile from "../user/Profile";

export default function Main(props) {
  return (
    <div style={{ height: 1800 }}>
      <Profile></Profile>
      <div>
        <Link to="/upload">
          <Button
            style={{
              margin: 10,
              float: "right",
              width: 130,
              marginRight: 30,
              fontSize: 12,
            }}
            variant="contained"
          >
            + Add Post
          </Button>
        </Link>
      </div>
      <div style={{ marginTop: 150 }}>
        <Link to="/detail">
          <CardPost></CardPost>
        </Link>
      </div>
    </div>
  );
}
