import React, { useState } from "react";

import styles from "./portal.module.css";
import useApi from "../../hooks/useApi";

const DeleteClubPortal = (props) => {
    const { deleteDataFromApiHandler } = useApi();
    const clubs_info = [];
    const [selectedClubID, setSelectedClubID] = useState();

    props.clubs.map((club) =>
        clubs_info.push({ id: club._id, clubName: club.clubName })
    );

    const formSubmitHandler = async (e) => {
        e.preventDefault();
        if (selectedClubID) {
            await deleteDataFromApiHandler({
                url: `${process.env.REACT_APP_SERVER_URL}/delete-club`,
                data: {
                    clubId: selectedClubID,
                },
            })
                .then((res) => console.log(res))
                .catch((err) => console.log(err));
        }
        props.closePortalHandler();
    };

    return (
        <div className={styles["portal-wrapper"]}>
            <form
                className={styles["portal-form"]}
                onSubmit={formSubmitHandler}
            >
                <h3>Delete Club</h3>
                <select
                    onChange={(e) => {
                        setSelectedClubID(e.target.value);
                    }}
                >
                    <option value="" selected={true} hidden>
                        Select CLub
                    </option>
                    {clubs_info.map((club) => {
                        return (
                            <option key={Math.random()} value={club.id}>
                                {club.clubName}
                            </option>
                        );
                    })}
                </select>
                <input
                    type="submit"
                    value="Delete Club"
                    className={styles["portal-submit__btn"]}
                />
                <button
                    className={styles["portal-submit__btn"]}
                    onClick={() => {
                        props.closePortalHandler();
                    }}
                >
                    Close
                </button>
            </form>
        </div>
    );
};

export default DeleteClubPortal;
