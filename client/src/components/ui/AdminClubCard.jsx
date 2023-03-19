import React from "react";
import GroupsIcon from "@mui/icons-material/Groups";

import styles from "./ui.module.css";

const AdminClubCard = (props) => {
    return (
        <div className={styles["club-item__Wrapper"]}>
            <div className={styles["group-icon"]}>
                <GroupsIcon />
            </div>
            <div className={styles["card-details"]}>
                <p className={styles["club-name"]}>Club Name: {props.clubName}</p>
                <p className={styles["club-lead"]}>Lead: {props.clubLead}</p>
                <p className={styles['no-of__member']}>Number of Members: { props.noOfMember }</p>
                <div className={styles["tags"]}>
                    {props.tags.map((tag) => {
                        return <span key={Math.random()}>{tag}</span>;
                    })}
                </div>
            </div>
        </div>
    );
};

export default AdminClubCard;
