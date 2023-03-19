import React from "react";

import styles from "./ui.module.css";

const EventCard = (props) => {
    return (
        <div className={styles['event-card__Wrapper']}>
            <span className={styles['event-date']}>{ props.eventDate }</span>
            <h3 className={styles['event-name']}>{props.eventName}</h3>
            <div className={styles['event-details']}>
                <p>Organising By: {props.hostClub}</p>
                <a href='/' target="_blank" className={styles['register-link']}>Register Here!</a>
            </div>
        </div>
    )
}

export default EventCard;