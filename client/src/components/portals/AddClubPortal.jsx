import React, { useRef } from "react";
import styles from "./portal.module.css";
import useApi from "../../hooks/useApi";

const AddClubPortal = (props) => {
    const { postDataToApiHandler } = useApi();
    const clubName = useRef("");
    const clubType = useRef("");
    const noOfMembers = useRef(0);

    const formSubmitHandler = async (e) => {
        e.preventDefault();
        const enteredClubName = clubName.current.value.trim();
        const enteredClubType = clubType.current.value.trim();
        const enteredNoOfMembers = noOfMembers.current.value;

        if (enteredClubName && enteredClubType && enteredNoOfMembers) {
            await postDataToApiHandler({
                url: `${process.env.REACT_APP_SERVER_URL}/create-club`,
                data: {
                    adminId: localStorage.getItem("admin_id"),
                    clubName: enteredClubName,
                    noOfMembers: +enteredNoOfMembers,
                    clubType: enteredClubType,
                },
            })
                .then((res) => console.log(res))
                .catch((err) => console.log(err));
        }

        clubName.current.value = '';
        clubType.current.value = '';
        noOfMembers.current.value = '';
        props.closePortalHandler();
    };
    return (
        <div className={styles["portal-wrapper"]}>
            <form
                className={styles["portal-form"]}
                onSubmit={formSubmitHandler}
            >
                <h3>Add New Club</h3>
                <input
                    type="text"
                    placeholder="Club Name"
                    className={styles["portal__input-field"]}
                    ref={clubName}
                />
                <input
                    type="text"
                    placeholder="Club Type"
                    className={styles["portal__input-field"]}
                    ref={clubType}
                />
                <input
                    type="number"
                    placeholder="Number of Member"
                    className={styles["portal__input-field"]}
                    ref={noOfMembers}
                />
                <input
                    type="submit"
                    value="Add Club"
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

export default AddClubPortal;
