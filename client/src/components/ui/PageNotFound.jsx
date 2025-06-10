import React from "react";
import { Link } from 'react-router-dom';

import styles from "./ui.module.css";

const PageNotFound = (props) => {
    return (
        <div className={styles['page_not_found-wrapper']}>
            <h3>OOPS! Page not Found</h3>
            <Link to="/">Go to Home Page!!</Link>
        </div>
    )
}

export default PageNotFound;