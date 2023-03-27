import React, { useEffect, useState } from "react";

import ClubHeader from "../components/club/ClubHeader";
import ClubInfo from "../components/club/ClubInfo";
import ClubMember from "../components/club/ClubMember";
import ClubEventCard from "../components/club/ClubEventCard";
import Footer from "../components/ui/Footer";

import styles from "./clubpage.module.css";

const ClubPage = (props) => {
    const [showMoreMembers, setShowMoreMembers] = useState(false);
    const [showMoreEvents, setShowMoreEvents] = useState(false);
    const [managerInfo, setManagerInfo] = useState({});

    useEffect(() => {
        const is_key_exists = localStorage.getItem("is_manager");
        const get_club_name = localStorage.getItem("club_id");
        const obj = { is_key_exists, get_club_name };
        if (is_key_exists && get_club_name) {
            setManagerInfo(obj);
        }
    }, []);

    return (
        <div className={styles["club-page__wrapper"]}>
            <ClubHeader
                clubName={props.club.clubName}
                managerInfo={managerInfo}
                club_id={props.club._id}
            />
            <ClubInfo aboutClub={props.club.aboutClub} />
            <div className={styles["club-members__wrapper"]}>
                <h2>Club Members</h2>
                <div className={styles["club-member__main"]}>
                    {!showMoreMembers &&
                        props.club.members.slice(0, 6).map((member) => {
                            return (
                                <ClubMember
                                    memberName={member.username}
                                    memberRole={member.email}
                                    memberType={member.userType}
                                    key={Math.random()}
                                />
                            );
                        })}
                    {showMoreMembers &&
                        props.club.members.map((member) => {
                            return (
                                <ClubMember
                                    memberName={member.username}
                                    memberRole={member.email}
                                    memberType={member.userType}
                                    key={Math.random()}
                                />
                            );
                        })}
                </div>
                <div className={styles["show-more__wrapper"]}>
                    <button
                        className={styles["show-more"]}
                        onClick={() => setShowMoreMembers(!showMoreMembers)}
                    >
                        {showMoreMembers ? "Show Less" : "Show More"}
                    </button>
                </div>
            </div>
            <div className={styles["club-events__wrapper"]}>
                <h2>Recent Events</h2>
                <div className={styles["club-events__main"]}>
                    {!showMoreEvents &&
                        props.club.clubEvents.slice(0, 3).map((events) => {
                            return (
                                <ClubEventCard
                                    eventDate={events.eventDate}
                                    eventName={events.eventName}
                                    aboutEvent={events.aboutEvent}
                                    registerLink={events.registerLink}
                                    eventPageLink={events.eventPageLink}
                                    key={Math.random()}
                                />
                            );
                        })}
                    {showMoreEvents &&
                        props.club.clubEvents.map((events) => {
                            return (
                                <ClubEventCard
                                    eventDate={events.eventDate}
                                    eventName={events.eventName}
                                    aboutEvent={events.aboutEvent}
                                    registerLink={events.registerLink}
                                    eventPageLink={events.eventPageLink}
                                    key={Math.random()}
                                />
                            );
                        })}
                </div>
                <div className={styles["show-more__wrapper"]}>
                    <button
                        className={styles["show-more"]}
                        onClick={() => setShowMoreEvents(!showMoreEvents)}
                    >
                        {showMoreEvents ? "Show Less" : "Show More"}
                    </button>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default ClubPage;
