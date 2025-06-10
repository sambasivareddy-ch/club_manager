import React, {useRef, useEffect, useState } from "react";

import Toast from "./Toast";
import useApi from "../../hooks/useApi";
import styles from "./portal.module.css";

const AddClubAbout = (props) => {
    const {postDataToApiHandler} = useApi();
    const aboutTheClub = useRef(null);

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
        if (aboutTheClub.current.value.trim()) {
            setIsLoading(true);
            await postDataToApiHandler({
                url: `${process.env.REACT_APP_SERVER_URL}/add-about-club`,
                data: {
                    club_id: props.club_id,
                    about: aboutTheClub.current.value.trim()
                }
            }).then((res) => {
                setResponse(true);
                setError(false);
                setIsLoading(false);
                setValidateError(false);
                aboutTheClub.current.value = "";
            }).catch(err => {
                setResponse(false);
                setError(true);
                setIsLoading(false);
                setValidateError(false);
                console.log(err)
            })
        } else {
            setValidateError(true);
        }
        props.portalCloseHandler();
    }

    return (
        <div className={styles["portal-wrapper"]}>
            <form className={styles["portal-form"]} onSubmit={formSubmitHandler}>
                <h3>Add Description of Club</h3>
                <textarea className={styles["portal__input-field"]} rows={15} ref={aboutTheClub}></textarea>
                <input
                    type="submit"
                    value="Add Description"
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
                <Toast typeOfToast="success" message="Successfully Updated the Club" />
            )}
            {error && <Toast typeOfToast="error" message="Adding About Failed" />}
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

export default AddClubAbout;
