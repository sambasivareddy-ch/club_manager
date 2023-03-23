import React from "react";

import styles from "./portal.module.css";

const AddClubMember = (props) => {
    return (
        <div className={styles["portal-wrapper"]}>
            <form className={styles["portal-form"]}>
                <h3>Add New Club Member</h3>
                <input
                    type="text"
                    placeholder="Club Member Name"
                    className={styles["portal__input-field"]}
                />
                <input
                    type="text"
                    placeholder="Member Email"
                    className={styles["portal__input-field"]}
                />
                <input
                    type="text"
                    placeholder="Member Role"
                    className={styles["portal__input-field"]}
                />
                <input
                    type="submit"
                    value="Add New Member"
                    className={styles["portal-submit__btn"]}
                />
            </form>
        </div>
    );
};

export default AddClubMember;
