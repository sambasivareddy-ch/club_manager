import React, {useRef} from "react";

import useApi from "../../hooks/useApi";
import styles from "./portal.module.css";

const AddClubAbout = (props) => {
    const {postDataToApiHandler} = useApi();
    const aboutTheClub = useRef(null);

    const formSubmitHandler = async (e) => {
        e.preventDefault();
        if (aboutTheClub.current.value.trim()) {
            await postDataToApiHandler({
                url: 'http://localhost:5000/add-about-club',
                data: {
                    club_id: props.club_id,
                    about: aboutTheClub.current.value.trim()
                }
            }).catch(err => {
                console.log(err)
            })
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
        </div>
    );
};

export default AddClubAbout;
