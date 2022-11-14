import React, { useState } from "react";
import "./Alert.css";

const Alert = ({ message, type = "primary", autoClose }) => {
  const [visible, setVisible] = useState(true);

  const closeHandler = () => {
    setVisible(false);
  };

  return (
    visible && (
      <div className={`alert-container alert-${type}`}>
        <span>This is an alert message</span>
        <span className="alert-close" onClick={closeHandler}>x</span>
      </div>
    )
  );
};

export default Alert;
