import React from "react";

import styles from "./ui.module.css";
import EditIcon from "@mui/icons-material/Edit";
import AddIcon from "@mui/icons-material/Add";

const Button = (props) => {
    const classes =
        props.btnType === "primary"
            ? styles["primary-btn"]
            : styles["secondary-btn"];

    const iconElement = props.iconType === "edit" ? <EditIcon /> : <AddIcon />;

    return (
        <button type="button" className={`${styles["btn"]} ${classes}`}>
            {iconElement} {props.value}
        </button>
    );
};

export default Button;
