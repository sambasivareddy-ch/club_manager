import React from "react";

import styles from "./ui.module.css";

const PageNotFound = (props) => {
    return (
        <div className={styles['page_not_found-wrapper']}>
            <h3>OOPS! Page not Found</h3>
        </div>
    )
}

export default PageNotFound;