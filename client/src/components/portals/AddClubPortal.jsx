import React, { useRef, useState, useEffect } from "react";
import styles from "./portal.module.css";
import useApi from "../../hooks/useApi";
import Toast from "./Toast";

const AddClubPortal = (props) => {
    const { postDataToApiHandler } = useApi();
    const clubName = useRef("");
    const clubType = useRef("");
    const noOfMembers = useRef(0);

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
        e.preventDefault();
        const enteredClubName = clubName.current.value.trim();
        const enteredClubType = clubType.current.value.trim();
        const enteredNoOfMembers = noOfMembers.current.value;

        if (enteredClubName && enteredClubType && enteredNoOfMembers) {
            setIsLoading(true);
            await postDataToApiHandler({
                url: `${process.env.REACT_APP_SERVER_URL}/create-club`,
                data: {
                    adminId: localStorage.getItem("admin_id"),
                    clubName: enteredClubName,
                    noOfMembers: +enteredNoOfMembers,
                    clubType: enteredClubType,
                },
            })
                .then((res) => {
                    setIsLoading(false);
                    setResponse(true);
                })
                .catch((err) => {
                    setError(true);
                    setIsLoading(false);
                });
        } else {
            setValidateError(true);
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
            {response && (
                <Toast typeOfToast="success" message="Successfully Added a club." />
            )}
            {error && <Toast typeOfToast="error" message="Adding Club Failed" />}
            {isLoading && <Toast typeOfToast="loading" message="Adding..." />}
            {validateError && (
                <Toast
                    typeOfToast="error"
                    message="Please enter all fields & valid data.."
                />
            )}
        </div>
    );
};

export default AddClubPortal;
