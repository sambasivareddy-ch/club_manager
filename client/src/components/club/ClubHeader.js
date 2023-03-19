import React from "react";

import styles from "./clubui.module.css";

const ClubHeader = (props) => {
    return (
        <div className={styles["club-header"]}>
            <h1 className={styles["club-title"]}>{props.clubName}</h1>
            <p className={styles["club-type"]}>Type: {props.typeOfClub}</p>
        </div>
    );
};

export default ClubHeader;
