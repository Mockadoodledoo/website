import React from "react";
import * as style from "./footer.module.css";

export default function Footer() {
  return (
    <footer className={style.footer}>
      Powered by crisps and made by{" "}
      <a href="https://github.com/Kokoden" target="_blank">
        Kokoden
      </a>{" "}
      and{" "}
      <a href="https://markg.co.uk/" target="_blank">
        ItsHobbes
      </a>
    </footer>
  );
}
