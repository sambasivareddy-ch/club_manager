import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { useNavigate } from "react-router-dom";

import AdminClubCard from "../components/ui/AdminClubCard";
import Button from "../components/ui/Button";
import styles from "./adminhome.module.css";
import AddClubManager from "../components/portals/AddClubManager";
import AddClubPortal from "../components/portals/AddClubPortal";
import DeleteClubPortal from "../components/portals/DeleteClubPortal";
import useApi from "../hooks/useApi";

const AdminHome = (props) => {
    const { getDataFromApiHandler } = useApi();
    const [addClubPortalVisible, setAddClubPortalVisible] = useState(false);
    const [addManagerPortal, setAddManagerPortal] = useState(false);
    const [deleteClubPortal, setDeleteClubPortal] = useState(false);
    const [clubsData, setClubsData] = useState([]);
    const [isReRequestReq, setReRequestReq] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const getClubHandler = async () => {
            getDataFromApiHandler({ url: "http://localhost:5000/get-clubs" })
                .then((res) => setClubsData(res.clubs))
                .catch((err) => console.log(err));
        };
        getClubHandler();
    }, [isReRequestReq]);

    return (
        <div className={styles["admin-page__Wrapper"]}>
            <div className={styles["admin-page"]}>
                <div className={styles["admin-operations"]}>
                    <Button
                        btnType="primary"
                        iconType="add"
                        value="Add Club"
                        showPortal={() => {
                            setAddClubPortalVisible(!addClubPortalVisible);
                        }}
                    />
                    <Button
                        btnType="primary"
                        iconType="add"
                        value="Add Manager"
                        showPortal={() => {
                            setAddManagerPortal(!addManagerPortal);
                        }}
                    />
                    <Button
                        btnType="secondary"
                        iconType="edit"
                        value="Delete Club"
                        showPortal={() => {
                            setDeleteClubPortal(!deleteClubPortal);
                        }}
                    />
                    <button
                        className={styles["logout-btn"]}
                        onClick={() => {
                            localStorage.removeItem("isAdmin");
                            localStorage.removeItem("admin_id");
                            navigate("/");
                        }}
                    >
                        Logout
                    </button>
                </div>
                <div className={styles["clubs-wrapper"]}>
                    <h2>Clubs in College</h2>
                    <div className={styles["clubs"]}>
                        {clubsData.length > 0 &&
                            clubsData.map((club) => {
                                return (
                                    <AdminClubCard
                                        clubName={club.clubName}
                                        clubLead={club.lead?.username}
                                        leadEmail={club.lead?.email}
                                        tags={club.clubType}
                                        noOfMember={club.noOfMembers}
                                        key={Math.random()}
                                    />
                                );
                            })}
                        {clubsData.length === 0 && <span>No Clubs Yet</span>}
                    </div>
                    {addClubPortalVisible &&
                        createPortal(
                            <AddClubPortal
                                closePortalHandler={() => {
                                    setReRequestReq(!isReRequestReq);
                                    setAddClubPortalVisible(false);
                                }}
                            />,
                            document.getElementById("portal")
                        )}
                    {deleteClubPortal &&
                        createPortal(
                            <DeleteClubPortal
                                clubs={clubsData}
                                closePortalHandler={() => {
                                    setReRequestReq(!isReRequestReq);
                                    setDeleteClubPortal(false);
                                }}
                            />,
                            document.getElementById("portal")
                        )}
                    {addManagerPortal &&
                        createPortal(
                            <AddClubManager
                                clubs={clubsData}
                                closePortalHandler={() => {
                                    setReRequestReq(!isReRequestReq);
                                    setAddManagerPortal(false);
                                }}
                            />,
                            document.getElementById("portal")
                        )}
                </div>
            </div>
        </div>
    );
};

export default AdminHome;
