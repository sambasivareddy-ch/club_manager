import React from "react";

import styles from "./portal.module.css";

const AddClubAbout = (props) => {
    return (
        <div className={styles["portal-wrapper"]}>
            <form className={styles["portal-form"]}>
                <h3>Add Description of Club</h3>
                <textarea className={styles["portal__input-field"]} rows={20}></textarea>
                <input
                    type="submit"
                    value="Add Description"
                    className={styles["portal-submit__btn"]}
                />
            </form>
        </div>
    );
};

export default AddClubAbout;
