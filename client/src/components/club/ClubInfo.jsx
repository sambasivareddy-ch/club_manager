import React from "react";

import styles from './clubui.module.css';

const ClubInfo = (props) => {
    return (
        <div className={styles['club-about']}>
            <h2>About</h2>
            <p className={styles['about']}>{props.aboutClub}</p>
        </div>
    )
}

export default ClubInfo;