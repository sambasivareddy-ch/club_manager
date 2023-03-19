import React from 'react';

import styles from "./clubui.module.css";
import download from "../../assets/download.jpeg"

const ClubEventCard = (props) => {
    return (
        <div className={styles['club-event_card__wrapper']}>
            <img src={download} alt="Event Poster"/>
            <div className={styles['event-info']}>
                <h3 className={styles['event-title']}>{props.eventTitle}</h3>
                <p className={styles['about-event']}>{props.aboutEvent}</p>
                <button className={styles['more-about_event__btn']}>More</button>
            </div>
        </div>
    )
}

export default ClubEventCard;