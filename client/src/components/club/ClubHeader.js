import React from "react";

import styles from "./clubui.module.css";

const ClubHeader = (props) => {
    return (
        <div className={styles['club-header']}>
            <h1>{props.clubName}</h1>
            <p>Type: {props.typeOfClub}</p>
        </div>
    )
}

export default ClubHeader;