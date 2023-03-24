import React, { useState, useRef } from "react";
import useApi from "../../hooks/useApi";
import styles from "./portal.module.css";

const AddClubManager = (props) => {
    const clubs_info = [];
    const [selectedClubID, setSelectedClubID] = useState();
    const managerName = useRef("");
    const managerEmail = useRef("");
    const { postDataToApiHandler } = useApi();

    props.clubs.map((club) =>
        clubs_info.push({ id: club._id, clubName: club.clubName })
    );

    const formSubmitHandler = async (e) => {
        e.preventDefault();
        const enteredName = managerName.current.value.trim();
        const enteredEmail = managerEmail.current.value.trim().toLowerCase();

        if (enteredEmail && enteredName && selectedClubID !== "") {
            await postDataToApiHandler({
                url: "http://localhost:5000/add-manager",
                data: {
                    clubId: selectedClubID,
                    managerEmail: enteredEmail,
                    managerName: enteredName,
                },
            })
                .then((res) => console.log(res))
                .catch((err) => console.log(err));
        }
        managerEmail.current.value = '';
        managerName.current.value = '';
        props.closePortalHandler();
    };

    return (
        <div className={styles["portal-wrapper"]}>
            <form
                className={styles["portal-form"]}
                onSubmit={formSubmitHandler}
            >
                <h3>Add Manager</h3>
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
                    type="text"
                    placeholder="Enter Manager Name"
                    className={styles["portal__input-field"]}
                    ref={managerName}
                />
                <input
                    type="email"
                    placeholder="Manager Email"
                    className={styles["portal__input-field"]}
                    ref={managerEmail}
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
