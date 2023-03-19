import React, { useRef } from "react";

import styles from "./form.module.css";

const Admin = (props) => {
    const adminEmail = useRef("");
    const adminPassword = useRef("");
    return (
        <div className={styles["form-wrapper"]}>
            <form className={styles["form"]}>
                <h3>Admin Login</h3>
                <label htmlFor="email" className={styles["field-label"]}>
                    <span>Email Address</span>
                    <input
                        type="email"
                        placeholder="abc@gmail.com"
                        ref={adminEmail}
                        className={styles["input-field"]}
                        id="email"
                    />
                </label>
                <label htmlFor="password" className={styles["field-label"]}>
                    <span>Password</span>
                    <input
                        type="password"
                        placeholder="your password"
                        ref={adminPassword}
                        className={styles["input-field"]}
                        id="password"
                    />
                </label>
                <input
                    type="submit"
                    value="Login as Admin"
                    className={styles["submit-btn"]}
                />
            </form>
        </div>
    );
};

export default Admin;
