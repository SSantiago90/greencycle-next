import React from "react";
import styles from "./notification.module.css";

function Notification({ children, fluid, color }) {
  const classFluid = fluid ? styles[fluid] : null;
  const classColor = color ? styles[color] : null;
  const classNamesNotif = `${styles.notification} ${classFluid} ${classColor}`;

  return <div className={classNamesNotif}>{children}</div>;
}

export default Notification;
