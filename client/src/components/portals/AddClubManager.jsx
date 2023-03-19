import React from "react";

import styles from "./portal.module.css";

const DUMMY_ClUBS = ["IEEE", "Rotaract Club", "NSS Club", "AI Club"];

const AddClubManager = (props) => {
    return (
        <div className={styles["portal-wrapper"]}>
            <form className={styles["portal-form"]}>
                <h3>Add Manager</h3>
                <select>
                    {DUMMY_ClUBS.map((club) => {
                        return <option key={Math.random()}>{club}</option>;
                    })}
                </select>
                <input
                    type="text"
                    placeholder="Enter Manager Name"
                    className={styles["portal__input-field"]}
                />
                <input
                    type="email"
                    placeholder="Manager Email"
                    className={styles["portal__input-field"]}
                />
                <input
                    type="submit"
                    value="Add Manager"
                    className={styles["portal-submit__btn"]}
                />
            </form>
        </div>
    );
};

export default AddClubManager;
