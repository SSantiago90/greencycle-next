import React from "react";

function AlertButton(props) {
  const handleClick = () => {
    confirm(props.alertMessage);
  };

  return <button onClick={handleClick}>{props.label}</button>;
}
export default AlertButton;
