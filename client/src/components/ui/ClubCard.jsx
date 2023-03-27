import React, { useEffect, useState } from "react";
import styles from "./ui.module.css";
import { useNavigate } from "react-router-dom";

const ClubCard = (props) => {
    const navigate = useNavigate();
    const [showClubPage, setShowClubPage] = useState(false);

    useEffect(() => {
        if(showClubPage) {
            navigate(`/club/${props.clubName.split(' ').join('-').toLowerCase()}`)
        }
    }, [showClubPage])

    return (
        <div className={styles['club-card__wrapper']} onClick={() => {
            setShowClubPage(true);
        }}>
            <p className={styles['club-title']}>{props.clubName}</p>
            <span className={styles['club-lead']}>Lead: {`${props.clubLead ? props.clubLead : 'None'}`}</span>
            <span className={styles['club-lead']}>Email: { `${props.leadEmail ? props.leadEmail : 'None'}` }</span>
        </div>
    )
}

export default ClubCard;