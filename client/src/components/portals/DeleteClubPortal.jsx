import React, { useState, useEffect } from "react";

import styles from "./portal.module.css";
import useApi from "../../hooks/useApi";


const DeleteClubPortal = (props) => {
    const { deleteDataFromApiHandler } = useApi();
    const clubs_info = [];
    const [selectedClubID, setSelectedClubID] = useState();

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
        if (selectedClubID) {
            setIsLoading(true);
            await deleteDataFromApiHandler({
                url: `${process.env.REACT_APP_SERVER_URL}/delete-club`,
                data: {
                    clubId: selectedClubID,
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
            {response && (
                <Toast typeOfToast="success" message="Successfully Deleted the Club." />
            )}
            {error && <Toast typeOfToast="error" message="Adding Club Failed" />}
            {isLoading && <Toast typeOfToast="loading" message="Deleting..." />}
            {validateError && (
                <Toast
                    typeOfToast="error"
                    message="Please enter all fields & valid data.."
                />
            )}
        </div>
    );
};

export default DeleteClubPortal;
