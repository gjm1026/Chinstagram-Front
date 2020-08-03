import React from 'react';
import { Link } from 'react-router-dom';
import "./logo.css";

export default function Logo(props) {
  return (
    <div>
      <Link to="/content" style={{ color: "inherit", textDecoration: "inherit" }}>
        <div className="logo-font">Chinstagram</div>
      </Link>
      <br></br>
      <br></br>
      <div className="border-style"></div>
    </div>
  );
}
