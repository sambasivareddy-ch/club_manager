import React, { useState } from "react";
import { createPortal } from "react-dom";

import AddClubAbout from "../portals/AddClubAbout";
import AddClubMember from "../portals/AddClubMember";
import AddClubEvent from "../portals/AddClubEvent";
import styles from "./clubui.module.css";

const ClubHeader = (props) => {
  const [isEditAboutEnabled, setIsEditAboutEnabled] = useState(false);
  const [isAddMemberEnabled, setIsAddMemberEnabled] = useState(false);
  const [isAddEventEnabled, setIsAddEventEnabled] = useState(false);

  return (
    <div className={styles["club-header"]}>
      <div className={styles["club-details"]}>
        <h1 className={styles["club-title"]}>{props.clubName}</h1>
      </div>
      {props.managerInfo.is_key_exists &&
        props.managerInfo.get_club_name === props.clubName && (
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
          </div>
        )}
      {isEditAboutEnabled &&
        createPortal(
          <AddClubAbout club_id={props.club_id} />,
          document.getElementById("portal")
        )}
      {isAddMemberEnabled &&
        createPortal(
          <AddClubMember club_id={props.club_id} />,
          document.getElementById("portal")
        )}
      {isAddEventEnabled &&
        createPortal(
          <AddClubEvent club_id={props.club_id} />,
          document.getElementById("portal")
        )}
    </div>
  );
};

export default ClubHeader;
