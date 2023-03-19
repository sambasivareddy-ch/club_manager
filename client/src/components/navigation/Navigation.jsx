import React from "react";
import { NavLink } from "react-router-dom";

import styles from "./navigation.module.css";

const Navigation = (props) => {
    return (
        <header className={styles["page-header"]}>
            <nav className={styles["app-navigation__wrapper"]}>
                <span className={styles["app-title"]}>Clubs Manager</span>
                <ol className={styles["navigation-list"]}>
                    <li className={styles["navigation-list__item"]}>
                        <NavLink to="/" className={styles["nav-link"]}>
                            01. Home
                        </NavLink>
                    </li>
                    <li className={styles["navigation-list__item"]}>
                        <NavLink to="/admin" className={styles["nav-link"]}>
                            02. Admin
                        </NavLink>
                    </li>
                    <li className={styles["navigation-list__item"]}>
                        <NavLink to="/member" className={styles["nav-link"]}>
                            03. Manager/Member
                        </NavLink>
                    </li>
                </ol>
            </nav>
        </header>
    );
};

export default Navigation;
