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

    const onClickHandler = () => {
        console.log("hi")
        props.showPortal();
    };

    return (
        <button
            type="button"
            className={`${styles["btn"]} ${classes}`}
            onClick={onClickHandler}
        >
            {iconElement} {props.value}
        </button>
    );
};

export default Button;
