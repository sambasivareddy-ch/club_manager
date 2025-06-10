import React, { useRef, useState, useEffect } from "react";
import useApi from "../../hooks/useApi";

import styles from "./portal.module.css";
import Toast from "./Toast";

const AddClubMember = (props) => {
    // username, isAdmin, isManager, club, userType, email
    const memberName = useRef('');
    const memberEmail = useRef('');
    const memberRole = useRef('');
    const { postDataToApiHandler } = useApi();

    const [response, setResponse] = useState(false);
    const [error, setError] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [validateError, setValidateError] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setError(false);
        }, 5000);
    }, [error]);

    useEffect(() => {
        setTimeout(() => {
            setResponse(false);
        }, 5000);
    }, [response]);

    useEffect(() => {
        setTimeout(() => {
            setValidateError(false);
        }, 5000);
    }, [validateError]);

    const formSubmitHandler = async (e) => {
        e.preventDefault()
        const username = memberName.current.value.trim();
        const email = memberEmail.current.value.trim();
        const userType = memberRole.current.value.trim();

        if (username && email && userType) {
            setIsLoading(true);
            await postDataToApiHandler({
                url: `${process.env.REACT_APP_SERVER_URL}/add-user`,
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
                .then((res) => {
                    setIsLoading(false);
                    setResponse(true);
                })
                .catch((err) => {
                    setIsLoading(false);
                    setError(true);
                });
        } else {
            setValidateError(true);
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
            {response && (
                <Toast typeOfToast="success" message="Successfully Added the Member." />
            )}
            {error && <Toast typeOfToast="error" message="Adding Member Failed" />}
            {isLoading && <Toast typeOfToast="loading" message="Updating..." />}
            {validateError && (
                <Toast
                    typeOfToast="error"
                    message="Please enter all fields & valid data.."
                />
            )}
        </div>
    );
};

export default AddClubMember;
