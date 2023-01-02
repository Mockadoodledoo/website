import React, { useState } from "react";
import * as style from "./generator-actions.module.css";
import download from "../../assets/download.svg";
import refresh from "../../assets/refresh.svg";

export default function GeneratorActions() {
  const [value, setValue] = useState("Untitled Dataset");
  const [filetype, setFiletype] = useState(".csv");

  function handleChange(event: any) {
    setValue(event.target.value);
  }

  function downloadFile() {
    const blob = new Blob();
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.style.display = "none";
    a.href = url;
    a.download = value + filetype;
    document.body.appendChild(a);
    a.click();
    window.URL.revokeObjectURL(url);
  }

  return (
    <div className={style.header}>
      <div className={style.title}>
        <input
          className={style.interactiveTitle}
          type="text"
          value={value}
          onChange={handleChange}
          maxLength={30}
        />
        <span className={style.filetype}>{filetype}</span>
      </div>
      <div className={style.actions}>
        <span className={style.reset}>
          Reset <img alt="refresh icon" src={refresh} className={style.icon} />
        </span>
        <span className={style.download} onClick={downloadFile}>
          Download{" "}
          <img alt="download icon" src={download} className={style.icon} />
        </span>
      </div>
    </div>
  );
}
