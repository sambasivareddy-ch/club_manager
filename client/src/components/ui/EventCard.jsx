import React from "react";

import styles from "./ui.module.css";

const EventCard = (props) => {
    return (
        <div className={styles['event-card__Wrapper']}>
            <span className={styles['event-date']}>{ props.eventDate }</span>
            <h3 className={styles['event-name']}>{props.eventName}</h3>
            <div className={styles['event-details']}>
                <p>Organising By: {props.hostClub}</p>
                <div className={styles['event-links']}>
                    <a href={props.registerLink} target="_blank" rel="noreferrer">Register Here!</a>
                    <a href={props.eventPageLink} target="_blank" rel="noreferrer">Event Preview</a>
                </div>
            </div>
        </div>
    )
}

export default EventCard;