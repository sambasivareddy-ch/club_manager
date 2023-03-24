import React from "react";

import styles from "./ui.module.css";

const Toast = (props) => {
  const toastClass =
    props.typeOfToast === "success"
      ? "toast_wrapper_success"
      : props.typeOfToast === "loading"
      ? "toast_wrapper_loading"
      : "toast_wrapper_failure";

  return (
    <div className={`${styles["toast_wrapper"]} ${styles[toastClass]}`}>
      {props.message}
    </div>
  );
};

export default Toast;
