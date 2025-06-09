import React, { useRef } from "react";
import { useSelector } from "react-redux";

import useApi from "../../hooks/useApi";
import styles from "./portal.module.css";

const AddClubEvent = (props) => {
    const eventNameRef = useRef("");
    const eventAboutRef = useRef("");
    const eventDateRef = useRef("");
    const eventRegisterRef = useRef("");
    const eventPageRef = useRef("");
    const { postDataToApiHandler } = useApi();

    const alreadyExistEventDates = useSelector(
        (state) => state.events.eventDates
    );

    const formSubmitHandler = async (e) => {
        e.preventDefault();
        const eventName = eventNameRef.current.value.trim();
        const aboutEvent = eventAboutRef.current.value.trim();
        const eventDate = eventDateRef.current.value.trim();
        const registerLink = eventRegisterRef.current.value.trim();
        const eventPageLink = eventPageRef.current.value.trim();

        if (
            eventName &&
            aboutEvent &&
            eventDate &&
            registerLink
        ) {
            await postDataToApiHandler({
                url: `${process.env.REACT_APP_SERVER_URL}/add-event`,
                data: {
                    club_id: props.club_id,
                    eventName,
                    aboutEvent,
                    eventDate,
                    registerLink,
                    eventPageLink,
                },
            })
                .then((res) => console.log(res))
                .catch((err) => console.log(err));
        } else if (
            alreadyExistEventDates.includes(new Date(eventDate).toDateString())
        ) {
            alert(
                `An event is already scheduled on that date, already reserved dates for the events are: ${alreadyExistEventDates.join('\n')}`
            );
        }

        eventNameRef.current.value = "";
        eventAboutRef.current.value = "";
        eventDateRef.current.value = "";
        eventRegisterRef.current.value = "";
        eventPageRef.current.value = "";
        props.portalCloseHandler();
    };

    return (
        <div className={styles["portal-wrapper"]}>
            <form
                className={styles["portal-form"]}
                onSubmit={formSubmitHandler}
            >
                <h3>Add New Event</h3>
                <input
                    type="text"
                    placeholder="Event Name"
                    className={styles["portal__input-field"]}
                    ref={eventNameRef}
                />
                <input
                    type="date"
                    placeholder="Event Date"
                    className={styles["portal__input-field"]}
                    ref={eventDateRef}
                />
                <input
                    type="text"
                    placeholder="Registration Link"
                    className={styles["portal__input-field"]}
                    ref={eventRegisterRef}
                />
                <input
                    type="text"
                    placeholder="Event Page Link (Optional)"
                    className={styles["portal__input-field"]}
                    ref={eventPageRef}
                />
                <textarea
                    className={styles["portal__input-field"]}
                    rows={10}
                    ref={eventAboutRef}
                ></textarea>
                <input
                    type="submit"
                    value="Add Event"
                    className={styles["portal-submit__btn"]}
                />
                <button
                    className={styles["portal-submit__btn"]}
                    onClick={() => {
                        props.portalCloseHandler();
                    }}
                >
                    Close
                </button>
            </form>
        </div>
    );
};

export default AddClubEvent;
