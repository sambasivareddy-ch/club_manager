import React, { useState } from "react";

import ClubHeader from "../components/club/ClubHeader";
import ClubInfo from "../components/club/ClubInfo";
import ClubMember from "../components/club/ClubMember";
import ClubEventCard from "../components/club/ClubEventCard";
import Footer from "../components/ui/Footer";

import styles from "./clubpage.module.css";

const DUMMY_INFO = {
    aboutClub:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    members: [
        {
            memberName: "Samba Chinta",
            memberRole: "Lead",
            memberType: "Student",
        },
        {
            memberName: "Samba Chinta",
            memberRole: "Lead",
            memberType: "Student",
        },
        {
            memberName: "Samba Chinta",
            memberRole: "Lead",
            memberType: "Student",
        },
        {
            memberName: "Samba Chinta",
            memberRole: "Lead",
            memberType: "Student",
        },
        {
            memberName: "Samba Chinta",
            memberRole: "Lead",
            memberType: "Student",
        },
        {
            memberName: "Samba Chinta",
            memberRole: "Lead",
            memberType: "Student",
        },
        {
            memberName: "Samba Chinta",
            memberRole: "Lead",
            memberType: "Student",
        },
        {
            memberName: "Samba Chinta",
            memberRole: "Lead",
            memberType: "Student",
        },
        {
            memberName: "Samba Chinta",
            memberRole: "Lead",
            memberType: "Student",
        },
    ],
    clubEvents: [
        {
            eventTitle: "Hello World!",
            aboutEvent:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
        },
        {
            eventTitle: "Hello World!",
            aboutEvent:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
        },
        {
            eventTitle: "Hello World!",
            aboutEvent:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
        },
        {
            eventTitle: "Hello World!",
            aboutEvent:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
        },
    ],
};

const ClubPage = (props) => {
    const [showMoreMembers, setShowMoreMembers] = useState(false);
    const [showMoreEvents, setShowMoreEvents] = useState(false);

    return (
        <div className={styles["club-page__wrapper"]}>
            <ClubHeader clubName="IEEE Student Branch" />
            <ClubInfo aboutClub={DUMMY_INFO.aboutClub} />
            <div className={styles["club-members__wrapper"]}>
                <h2>Club Members</h2>
                <div className={styles["club-member__main"]}>
                    {!showMoreMembers &&
                        DUMMY_INFO.members.slice(0, 6).map((member) => {
                            return (
                                <ClubMember
                                    memberName={member.memberName}
                                    memberRole={member.memberRole}
                                    memberType={member.memberType}
                                />
                            );
                        })}
                    {showMoreMembers &&
                        DUMMY_INFO.members.map((member) => {
                            return (
                                <ClubMember
                                    memberName={member.memberName}
                                    memberRole={member.memberRole}
                                    memberType={member.memberType}
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
                        DUMMY_INFO.clubEvents.slice(0, 3).map((events) => {
                            return (
                                <ClubEventCard
                                    eventTitle={events.eventTitle}
                                    aboutEvent={events.aboutEvent}
                                    key={Math.random()}
                                />
                            );
                        })}
                    {showMoreEvents &&
                        DUMMY_INFO.clubEvents.map((events) => {
                            return (
                                <ClubEventCard
                                    eventTitle={events.eventTitle}
                                    aboutEvent={events.aboutEvent}
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
