import React from "react";

import AdminClubCard from "../components/ui/AdminClubCard";
import Button from "../components/ui/Button";
import styles from "./adminhome.module.css";

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
    }
];

const AdminHome = (props) => {
    return (
        <div className={styles["admin-page__Wrapper"]}>
            <div className={styles["admin-page"]}>
                <div className={styles["admin-operations"]}>
                    <Button btnType="primary" iconType="add" value="Add Club" />
                    <Button
                        btnType="primary"
                        iconType="add"
                        value="Add Manager"
                    />
                    <Button
                        btnType="secondary"
                        iconType="edit"
                        value="Delete Club"
                    />
                </div>
                <div className={styles["clubs-wrapper"]}>
                    <h2>Clubs in College</h2>
                    <div className={styles['clubs']}>
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
                </div>
            </div>
        </div>
    );
};

export default AdminHome;
