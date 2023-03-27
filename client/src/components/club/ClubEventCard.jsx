import React from "react";

import styles from "./clubui.module.css";
import event from "../../assets/event.jpg";

const ClubEventCard = (props) => {
    console.log(props)
    return (
        <div className={styles["club-event_card__wrapper"]}>
            <img src={event} alt="Event Poster" />
            <div className={styles["event-info"]}>
                <span className={styles["event-date"]}>{new Date(props.eventDate).toDateString()}</span>
                <h3 className={styles["event-title"]}>{props.eventName}</h3>
                <p className={styles["about-event"]}>{props.aboutEvent}</p>
                <div className={styles["event-links"]}>
                    <a href={props.registerLink} target="_blank" rel="noreferrer">Register Here</a>
                    <a href={props.eventPageLink} target="_blank" rel="noreferrer">Event Preview</a>
                </div>
            </div>
        </div>
    );
};

export default ClubEventCard;
