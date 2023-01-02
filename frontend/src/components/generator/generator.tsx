import React from "react";
import GeneratorActions from "../generator-actions/generator-actions";
import * as style from "./generator.module.css";

export default function Generator() {
  return (
    <div className="generator">
      <GeneratorActions />
    </div>
  );
}
