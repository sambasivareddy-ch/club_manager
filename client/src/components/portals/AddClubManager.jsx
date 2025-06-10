import React, { useState, useRef, useEffect } from "react";
import useApi from "../../hooks/useApi";
import styles from "./portal.module.css";
import Toast from "./Toast";

const AddClubManager = (props) => {
    const clubs_info = [];
    const [selectedClubID, setSelectedClubID] = useState();
    const managerName = useRef("");
    const managerEmail = useRef("");
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

    props.clubs.map((club) =>
        clubs_info.push({ id: club._id, clubName: club.clubName })
    );

    const formSubmitHandler = async (e) => {
        e.preventDefault();
        const enteredName = managerName.current.value.trim();
        const enteredEmail = managerEmail.current.value.trim().toLowerCase();

        if (enteredEmail && enteredName && selectedClubID !== "") {
            setIsLoading(true);
            await postDataToApiHandler({
                url: `${process.env.REACT_APP_SERVER_URL}/add-manager`,
                data: {
                    clubId: selectedClubID,
                    managerEmail: enteredEmail,
                    managerName: enteredName,
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
        managerEmail.current.value = "";
        managerName.current.value = "";
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
                <Toast typeOfToast="success" message="Successfully Added the Manager." />
            )}
            {error && <Toast typeOfToast="error" message="Adding Manager Failed" />}
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

export default AddClubManager;
