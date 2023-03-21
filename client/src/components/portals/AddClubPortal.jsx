import React from "react";

import styles from "./portal.module.css";

const AddClubPortal = (props) => {
    return (
        <div className={styles["portal-wrapper"]}>
            <form className={styles["portal-form"]}>
                <h3>Add New Club</h3>
                <input
                    type="text"
                    placeholder="Club Name"
                    className={styles["portal__input-field"]}
                />
                <input
                    type="text"
                    placeholder="Club Type"
                    className={styles["portal__input-field"]}
                />
                <input
                    type="number"
                    placeholder="Number of Member"
                    className={styles["portal__input-field"]}
                />
                <input
                    type="submit"
                    value="Add Club"
                    className={styles["portal-submit__btn"]}
                />
            </form>
        </div>
    );
};

export default AddClubPortal;
