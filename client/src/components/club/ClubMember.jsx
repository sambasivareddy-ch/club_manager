import React from "react";

import styles from './clubui.module.css';

const ClubMember = (props) => {
    return (
        <div className={styles['club-member__wrapper']}>
            <h3 className={styles['member-name']}>{props.memberName}</h3>
            <p>Role: {props.memberRole}</p>
            <p>Type: {props.memberType }</p>
        </div>
    )
}

export default ClubMember;