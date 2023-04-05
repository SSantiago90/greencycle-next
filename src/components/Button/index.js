import React from "react";
import styles from "./button.module.css";

function Button({ color, type, size, children }) {
  const classSize = size ? styles[size] : null;
  const classType = type ? styles[type] : null;

  const classNamesBtn = `btn ${classSize} ${classType}`;

  return <button className={classNamesBtn}>{children}</button>;
}

export default Button;
