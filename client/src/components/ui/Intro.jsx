import React from "react";

import styles from "../navigation/navigation.module.css";

const Intro = (props) => {
    return (
        <div className={styles["welcome-wrapper"]}>
            <h1>Engage with Events around u.</h1>
            <p className={styles["about"]}>
                The Main purpose of this Club Manager application is to provide
                an interface, which helps the clubs in the college to manage
                their events, tasks efficiently by communicating with{" "}
                <b>other clubs</b> as well.
                Scroll Down to know more.
                <br />
            </p>
        </div>
    );
};

export default Intro;
