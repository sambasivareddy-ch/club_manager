import React from "react";

import styles from "./portal.module.css";

const DUMMY_ClUBS = ['IEEE', 'Rotaract Club', 'NSS Club', 'AI Club'];

const DeleteClubPortal = (props) => {
    return (
        <div className={styles["portal-wrapper"]}>
            <form className={styles["portal-form"]}>
                <h3>Delete Club</h3>
                <select>
                    {DUMMY_ClUBS.map(club => {
                        return <option key={Math.random()}>{ club }</option>
                    })}
                </select>
                <input
                    type="submit"
                    value="Delete Club"
                    className={styles["portal-submit__btn"]}
                />
            </form>
        </div>
    );
};

export default DeleteClubPortal;
