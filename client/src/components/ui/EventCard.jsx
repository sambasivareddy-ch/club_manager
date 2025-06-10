import React, { useState, useEffect } from "react";

import useApi from "../../hooks/useApi";
import styles from "./ui.module.css";

const EventCard = (props) => {
    const { getDataFromApiHandler } = useApi();
    const [clubName, setClubName] = useState("");

    useEffect(() => {
        const getClubsInfoHandler = async () => {
          await getDataFromApiHandler({
            url: `${process.env.REACT_APP_SERVER_URL}/get-info/${props.club}`,
          })
            .then((res) => setClubName(res.club.clubName))
            .catch((err) => console.log(err));
        };
        getClubsInfoHandler();
      }, []);

    return (
        <div className={styles['event-card__Wrapper']}>
            <span className={styles['event-date']}>{ props.eventDate }</span>
            <h3 className={styles['event-name']}>{props.eventName}</h3>
            <div className={styles['event-details']}>
                <p>Organising By: {clubName}</p>
                <div className={styles['event-links']}>
                    <a href={props.registerLink} target="_blank" rel="noreferrer">Register Here!</a>
                    <a href={props.eventPageLink} target="_blank" rel="noreferrer">Event Preview</a>
                </div>
            </div>
        </div>
    )
}

export default EventCard;