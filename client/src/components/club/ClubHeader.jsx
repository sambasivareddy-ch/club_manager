import React, { useState } from "react";
import { createPortal } from "react-dom";
import { useNavigate } from "react-router-dom";

import AddClubAbout from "../portals/AddClubAbout";
import AddClubMember from "../portals/AddClubMember";
import AddClubEvent from "../portals/AddClubEvent";
import styles from "./clubui.module.css";

const ClubHeader = (props) => {
    const [isEditAboutEnabled, setIsEditAboutEnabled] = useState(false);
    const [isAddMemberEnabled, setIsAddMemberEnabled] = useState(false);
    const [isAddEventEnabled, setIsAddEventEnabled] = useState(false);
    const navigate = useNavigate();

    return (
        <div className={styles["club-header"]}>
            <div className={styles["club-details"]}>
                <h1 className={styles["club-title"]}>{props.clubName}</h1>
            </div>
            {props.managerInfo.is_key_exists &&
                props.managerInfo.get_club_name === props.club_id && (
                    <div className={styles["manager-tools"]}>
                        <button
                            className={styles["manager-tool__btn"]}
                            onClick={() => {
                                setIsEditAboutEnabled(true);
                            }}
                        >
                            Edit About
                        </button>
                        <button
                            className={styles["manager-tool__btn"]}
                            onClick={() => {
                                setIsAddMemberEnabled(true);
                            }}
                        >
                            Add Member
                        </button>
                        <button
                            className={styles["manager-tool__btn"]}
                            onClick={() => {
                                setIsAddEventEnabled(true);
                            }}
                        >
                            Add Event
                        </button>
                        <button
                            className={styles["manager-tool__btn_logout"]}
                            onClick={() => {
                                localStorage.removeItem("is_manager");
                                localStorage.removeItem("club_id");
                                navigate("/member");
                            }}
                        >
                            Log Out
                        </button>
                    </div>
                )}
            {isEditAboutEnabled &&
                createPortal(
                    <AddClubAbout
                        club_id={props.club_id}
                        portalCloseHandler={() => {
                            setIsEditAboutEnabled(false);
                        }}
                    />,
                    document.getElementById("portal")
                )}
            {isAddMemberEnabled &&
                createPortal(
                    <AddClubMember
                        club_id={props.club_id}
                        portalCloseHandler={() => {
                            setIsAddMemberEnabled(false);
                        }}
                    />,
                    document.getElementById("portal")
                )}
            {isAddEventEnabled &&
                createPortal(
                    <AddClubEvent
                        club_id={props.club_id}
                        portalCloseHandler={() => {
                            setIsAddEventEnabled(false);
                        }}
                    />,
                    document.getElementById("portal")
                )}
        </div>
    );
};

export default ClubHeader;
