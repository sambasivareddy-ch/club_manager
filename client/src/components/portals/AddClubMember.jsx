import React, { useRef } from "react";
import useApi from "../../hooks/useApi";

import styles from "./portal.module.css";

const AddClubMember = (props) => {
    // username, isAdmin, isManager, club, userType, email
    const memberName = useRef('');
    const memberEmail = useRef('');
    const memberRole = useRef('');
    const { postDataToApiHandler } = useApi();

    const formSubmitHandler = async (e) => {
        e.preventDefault()
        const username = memberName.current.value.trim();
        const email = memberEmail.current.value.trim();
        const userType = memberRole.current.value.trim();

        if (username && email && userType) {
            await postDataToApiHandler({
                url: "http://localhost:5000/add-user",
                data: {
                    club: props.club_id,
                    username,
                    isAdmin: false,
                    isManager: false,
                    userType,
                    email,
                    password: ''
                },
            })
                .then((res) => console.log(res))
                .catch((err) => console.log(err));
        }

        memberName.current.value = '';
        memberEmail.current.value = '';
        memberRole.current.value = '';
        props.portalCloseHandler();
    }
    
    return (
        <div className={styles["portal-wrapper"]}>
            <form className={styles["portal-form"]} onSubmit={formSubmitHandler}>
                <h3>Add New Club Member</h3>
                <input
                    type="text"
                    placeholder="Club Member Name"
                    className={styles["portal__input-field"]}
                    ref = {memberName}
                />
                <input
                    type="text"
                    placeholder="Member Email"
                    className={styles["portal__input-field"]}
                    ref = {memberEmail}
                />
                <input
                    type="text"
                    placeholder="Member Role"
                    className={styles["portal__input-field"]}
                    ref = {memberRole}
                />
                <input
                    type="submit"
                    value="Add New Member"
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

export default AddClubMember;
