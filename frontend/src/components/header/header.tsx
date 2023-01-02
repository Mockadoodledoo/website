import React from "react";
import * as style from "./header.module.css";
import logo from "../../assets/logo.svg";
import arrowUpRight from "../../assets/arrow-up-right.svg";

export default function Header() {
  return (
    <header className={style.header}>
      <img className={style.logo} alt="Mockadoodledoo Logo" />
      <a href="https://github.com/Mockadoodledoo" target="_blank">
        source code
        <img
          className={style.external}
          alt="external link icon"
          src={arrowUpRight}
        />
      </a>
    </header>
  );
}
