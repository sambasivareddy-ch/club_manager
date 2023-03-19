import React from "react";

import ClubCard from "../components/ui/ClubCard";
import EventCard from "../components/ui/EventCard";
import Intro from "../components/ui/Intro";
import Footer from "../components/ui/Footer";
import styles from "./home.module.css";

const DUMMY_CLUBS = [
    {
        clubName: "IEEE",
        clubLead: "Mr. Abc",
        leadDept: "CSE",
    },
    {
        clubName: "NSS",
        clubLead: "Mrs. Xyz",
        leadDept: "IT",
    },
    {
        clubName: "GVP AI Club",
        clubLead: "Mr. Abc",
        leadDept: "ECE",
    },
    {
        clubName: "Rotaract Club",
        clubLead: "Mrs. Abc",
        leadDept: "EEE",
    },
    {
        clubName: "Home of Humanity",
        clubLead: "Mr. Abc",
        leadDept: "CSE",
    },
    {
        clubName: "IoT club",
        clubLead: "Mrs. Def",
        leadDept: "Civil",
    },
];

const DUMMY_EVENTS = [
    {
        eventDate: "March 20, 2023",
        eventName: "Event A",
        hostClub: "IEEE",
    },
    {
        eventDate: "March 15, 2023",
        eventName: "Event B",
        hostClub: "Rotaract",
    },
    {
        eventDate: "March 28, 2023",
        eventName: "Event C",
        hostClub: "NSS",
    },
    {
        eventDate: "March 31, 2023",
        eventName: "Event D",
        hostClub: "IEEE",
    },
];

const Home = (props) => {
    return (
        <div className={styles["home-wrapper"]}>
            <Intro />
            <div className={styles["club-list__wrapper"]}>
                <h2>Clubs in the College</h2>
                <ol className={styles["club-list"]}>
                    {DUMMY_CLUBS.map((club) => {
                        return (
                            <li
                                key={Math.random()}
                                className={styles["club-list__item"]}
                            >
                                <ClubCard
                                    clubName={club.clubName}
                                    clubLead={club.clubLead}
                                    leadDept={club.leadDept}
                                />
                            </li>
                        );
                    })}
                </ol>
            </div>
            <div className={styles["events-wrapper"]}>
                <h2>Events near by</h2>
                <div className={styles["events"]}>
                    {DUMMY_EVENTS.map((evnt) => {
                        return (
                            <EventCard
                                key={Math.random()}
                                eventDate={evnt.eventDate}
                                eventName={evnt.eventName}
                                hostClub={evnt.hostClub}
                            />
                        );
                    })}
                </div>
            </div>
            <Footer/>
        </div>
    );
};

export default Home;
