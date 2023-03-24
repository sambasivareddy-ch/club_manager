import React, { useRef, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import styles from "./form.module.css";
import useApi from "../../hooks/useApi";
import Toast from "../portals/Toast";

const Admin = (props) => {
    const { getDataFromApiHandler } = useApi();
    const [response, setResponse] = useState(false);
    const [error, setError] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    const adminEmail = useRef("");
    const adminPassword = useRef("");

    useEffect(() => {
        setTimeout(() => {
            setError(false);
        }, 5000);
    }, [error]);

    useEffect(() => {
        setTimeout(() => {
            setResponse(false);
        }, 5000);
    }, [response]);

    const formSubmitHandler = async (e) => {
        e.preventDefault();
        const enteredMail = adminEmail.current.value.toLowerCase();
        const enteredPassword = adminPassword.current.value;

        if (enteredMail !== "" && enteredPassword !== "") {
            setIsLoading(true);
            const payload = {
                url: `http://localhost:5000/admin-login/${enteredMail}/${enteredPassword}`,
            };
            await getDataFromApiHandler(payload)
                .then((res) => {
                    localStorage.setItem('isAdmin', true);
                    localStorage.setItem('admin_id', res.adminId);
                    navigate('/admin/home')
                    setResponse(true);
                })
                .catch((err) => {
                    console.log(err);
                    setError(true);
                });
            setIsLoading(false);
        }

        adminEmail.current.value = "";
        adminPassword.current.value = "";
    };

    console.table(response, error, isLoading);

    return (
        <div className={styles["form-wrapper"]}>
            <form className={styles["form"]} onSubmit={formSubmitHandler}>
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
            {response && (
                <Toast typeOfToast="success" message="Successfully Loggedin" />
            )}
            {error && <Toast typeOfToast="error" message="Login Failed" />}
            {isLoading && <Toast typeOfToast="loading" message="Loading..." />}
        </div>
    );
};

export default Admin;
