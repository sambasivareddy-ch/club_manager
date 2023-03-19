import React from "react";

import styles from "./clubui.module.css";

const ClubHeader = (props) => {
  return (
    <div className={styles["club-header"]}>
      <div className={styles["club-details"]}>
        <h1 className={styles["club-title"]}>{props.clubName}</h1>
      </div>
      <div className={styles['manager-tools']}>
        <button className={styles['manager-tool__btn']}>Edit About</button>
        <button className={styles['manager-tool__btn']}>Add Member</button>
        <button className={styles['manager-tool__btn']}>Add Event</button>
      </div>
    </div>
  );
};

export default ClubHeader;
