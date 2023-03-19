import React, { useState } from "react";
import { createPortal } from "react-dom";

import AdminClubCard from "../components/ui/AdminClubCard";
import Button from "../components/ui/Button";
import styles from "./adminhome.module.css";
import AddClubManager from "../components/portals/AddClubManager";
import AddClubPortal from "../components/portals/AddClubPortal";
import DeleteClubPortal from "../components/portals/DeleteClubPortal";

const CLUBS_DATA = [
    {
        clubName: "IEEE",
        clubLead: "Mr.Abc",
        noOfMember: 120,
        tags: ["technical"],
    },
    {
        clubName: "Rotaract Club",
        clubLead: "Mr.Xyz",
        noOfMember: 100,
        tags: ["social"],
    },
    {
        clubName: "NSS Club",
        clubLead: "Mr.Abc",
        noOfMember: 230,
        tags: ["social", "service"],
    },
    {
        clubName: "AI Club",
        clubLead: "Mr.Xyz",
        noOfMember: 80,
        tags: ["technical"],
    },
];

const AdminHome = (props) => {
    const [addClubPortalVisible, setAddClubPortalVisible] = useState(false);
    const [addManagerPortal, setAddManagerPortal] = useState(false);
    const [deleteClubPortal, setDeleteClubPortal] = useState(false);

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
                            setAddManagerPortal(!addManagerPortal)
                        }}
                    />
                    <Button
                        btnType="secondary"
                        iconType="edit"
                        value="Delete Club"
                        showPortal={() => {
                            setDeleteClubPortal(!deleteClubPortal)
                        }}
                    />
                </div>
                <div className={styles["clubs-wrapper"]}>
                    <h2>Clubs in College</h2>
                    <div className={styles["clubs"]}>
                        {CLUBS_DATA.map((club) => {
                            return (
                                <AdminClubCard
                                    clubName={club.clubName}
                                    clubLead={club.clubLead}
                                    tags={club.tags}
                                    noOfMember={club.noOfMember}
                                    key={Math.random()}
                                />
                            );
                        })}
                    </div>
                    {addClubPortalVisible &&
                        createPortal(
                            <AddClubPortal />,
                            document.getElementById("portal")
                        )}
                    {deleteClubPortal &&
                        createPortal(
                            <DeleteClubPortal />,
                            document.getElementById("portal")
                        )}
                    {addManagerPortal &&
                        createPortal(
                            <AddClubManager />,
                            document.getElementById("portal")
                        )}
                </div>
            </div>
        </div>
    );
};

export default AdminHome;
