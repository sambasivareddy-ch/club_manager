import React, { useRef, useState, useEffect } from "react";

import styles from "./form.module.css";
import useApi from "../../hooks/useApi";
import Toast from "../portals/Toast";

const Member = (props) => {
    const memberEmail = useRef("");
    const memberPassword = useRef("");

    const [response, setResponse] = useState(false);
    const [error, setError] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [validateError, setValidateError] = useState(false);

    const { getDataFromApiHandler } = useApi();

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

    useEffect(() => {
        setTimeout(() => {
            setValidateError(false);
        }, 5000);
    }, [validateError]);

    const formSubmitHandler = async (e) => {
        e.preventDefault();
        const enteredMail = memberEmail.current.value.toLowerCase();
        const enteredPassword = memberPassword.current.value;
        const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;

        if (
            emailRegex.test(enteredMail) &&
            enteredMail !== "" &&
            enteredPassword !== ""
        ) {
            setIsLoading(true);
            const payload = {
                url: `http://localhost:5000/manager-login/${enteredMail}/${enteredPassword}`,
            };
            await getDataFromApiHandler(payload)
                .then((res) => {
                    // localStorage.setItem("i", true);
                    // localStorage.setItem("admin_id", res.adminId);
                    // navigate("/admin/home");
                    console.log(res);
                    setResponse(true);
                })
                .catch((err) => {
                    console.log(err);
                    setError(true);
                });
            setIsLoading(false);
        } else {
            setValidateError(true);
        }

        memberEmail.current.value = "";
        memberPassword.current.value = "";
    };

    return (
        <div className={styles["form-wrapper"]}>
            <form className={styles["form"]} onSubmit={formSubmitHandler}>
                <h3>Club Manager Login</h3>
                <label htmlFor="email" className={styles["field-label"]}>
                    <span>Email Address</span>
                    <input
                        type="email"
                        placeholder="abc@gmail.com"
                        ref={memberEmail}
                        className={styles["input-field"]}
                        id="email"
                    />
                </label>
                <label htmlFor="password" className={styles["field-label"]}>
                    <span>Password</span>
                    <input
                        type="password"
                        placeholder="your password"
                        ref={memberPassword}
                        className={styles["input-field"]}
                        id="password"
                    />
                </label>
                <input
                    type="submit"
                    value="Login as Manager"
                    className={styles["submit-btn"]}
                />
            </form>
            {response && (
                <Toast typeOfToast="success" message="Successfully Loggedin" />
            )}
            {error && <Toast typeOfToast="error" message="Login Failed" />}
            {isLoading && <Toast typeOfToast="loading" message="Loading..." />}
            {validateError && (
                <Toast
                    typeOfToast="error"
                    message="Please enter all fields & valid data.."
                />
            )}
        </div>
    );
};

export default Member;
