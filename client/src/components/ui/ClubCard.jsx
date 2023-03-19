import React from "react";

import styles from "./ui.module.css";

const ClubCard = (props) => {
    return (
        <div className={styles['club-card__wrapper']}>
            <p className={styles['club-title']}>{props.clubName}</p>
            <span className={styles['club-lead']}>Lead: { `${props.clubLead} (${props.leadDept})` }</span>
        </div>
    )
}

export default ClubCard;