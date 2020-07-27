import React from 'react';
import CardPostDetail from "./CardPostDetail";
import Logo from "../logo/Logo";

export default function PostView(props) {
  return (
    <div style={{ height: 1200 }}>
      <Logo></Logo>
      <CardPostDetail></CardPostDetail>
    </div>
  );
}
