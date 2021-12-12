import { ReactComponent as Logo } from "../assets/logo.svg";
import React from "react";
import "./Header.css";

function Header() {
  return (
    <header className="App-header">
      <Logo className="App-logo" />
      <h1 className="App-heading">QuotesApp</h1>
    </header>
  );
}

export default Header;
