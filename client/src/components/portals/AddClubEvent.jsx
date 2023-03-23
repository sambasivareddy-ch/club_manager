import React from "react";

import styles from "./portal.module.css";

const AddClubEvent = (props) => {
    return (
        <div className={styles["portal-wrapper"]}>
            <form className={styles["portal-form"]}>
                <h3>Add New Event</h3>
                <input
                    type="text"
                    placeholder="Event Name"
                    className={styles["portal__input-field"]}
                />
                <input
                    type="date"
                    placeholder="Event Date"
                    className={styles["portal__input-field"]}
                />
                <input
                    type="text"
                    placeholder="Registration Link"
                    className={styles["portal__input-field"]}
                />
                <input
                    type="text"
                    placeholder="Event Page Link (Optional)"
                    className={styles["portal__input-field"]}
                />
                <textarea className={styles["portal__input-field"]} rows={10}></textarea>
                <input
                    type="submit"
                    value="Add Event"
                    className={styles["portal-submit__btn"]}
                />
            </form>
        </div>
    );
};

export default AddClubEvent;
