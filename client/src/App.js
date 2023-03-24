import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";

import Navigation from "./components/navigation/Navigation";
import Admin from "./components/forms/Admin";
import Member from "./components/forms/Member";
import AdminHome from "./pages/AdminHome";
import ClubPage from "./pages/ClubPage";
import Home from "./pages/Home";
import styles from "./app.module.css";

const DUMMY_CLUBS = [
    {
        clubName: "IEEE",
        clubLead: "Mr. Abc",
        leadDept: "CSE",
        aboutClub: "DUMMy ABout",
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
        ],
        clubEvents: [
            {
                eventTitle: "Hello World!",
                aboutEvent: "Dummy Event About",
            },
            {
                eventTitle: "Hello World!",
                aboutEvent: "Dummy Event About",
            },
        ],
    },
    {
        clubName: "NSS",
        clubLead: "Mrs. Xyz",
        leadDept: "IT",
        aboutClub: "DUMMy ABout",
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
        ],
        clubEvents: [
            {
                eventTitle: "Hello World!",
                aboutEvent: "Dummy Event About",
            },
            {
                eventTitle: "Hello World!",
                aboutEvent: "Dummy Event About",
            },
        ],
    },
    {
        clubName: "GVP AI Club",
        clubLead: "Mr. Abc",
        leadDept: "ECE",
        aboutClub: "DUMMy ABout",
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
        ],
        clubEvents: [
            {
                eventTitle: "Hello World!",
                aboutEvent: "Dummy Event About",
            },
            {
                eventTitle: "Hello World!",
                aboutEvent: "Dummy Event About",
            },
        ],
    },
    {
        clubName: "Rotaract Club",
        clubLead: "Mrs. Abc",
        leadDept: "EEE",
        aboutClub: "DUMMy ABout",
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
        ],
        clubEvents: [
            {
                eventTitle: "Hello World!",
                aboutEvent: "Dummy Event About",
            },
            {
                eventTitle: "Hello World!",
                aboutEvent: "Dummy Event About",
            },
        ],
    },
    {
        clubName: "Home of Humanity",
        clubLead: "Mr. Abc",
        leadDept: "CSE",
        aboutClub: "DUMMy ABout",
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
        ],
        clubEvents: [
            {
                eventTitle: "Hello World!",
                aboutEvent: "Dummy Event About",
            },
            {
                eventTitle: "Hello World!",
                aboutEvent: "Dummy Event About",
            },
        ],
    },
    {
        clubName: "IoT club",
        clubLead: "Mrs. Def",
        leadDept: "Civil",
        aboutClub: "DUMMy ABout",
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
        ],
        clubEvents: [
            {
                eventTitle: "Hello World!",
                aboutEvent: "Dummy Event About",
            },
            {
                eventTitle: "Hello World!",
                aboutEvent: "Dummy Event About",
            },
        ],
    },
];

const DUMMY_EVENTS = [
    {
        eventDate: new Date(2023, 3, 23),
        eventName: "Event A",
        hostClub: "IEEE",
    },
    {
        eventDate: new Date(2023, 3, 2),
        eventName: "Event B",
        hostClub: "Rotaract",
    },
    {
        eventDate: new Date(2023, 4, 16),
        eventName: "Event C",
        hostClub: "NSS",
    },
    {
        eventDate: new Date(2023, 5, 9),
        eventName: "Event D",
        hostClub: "IEEE",
    },
    {
        eventDate: new Date(2023, 5, 9),
        eventName: "Event E",
        hostClub: "IEEE",
    },
    {
        eventDate: new Date(2023, 4, 16),
        eventName: "Event F",
        hostClub: "IEEE",
    },
];

const App = () => {
    const [isAdminExists, setIsAdminExists] = useState(null);
    useEffect(() => {
        setIsAdminExists(localStorage.getItem("isAdmin"));
    }, []);
  
    return (
        <div className={styles["app"]}>
            <Navigation isAdminLoggedIn={isAdminExists} />
            <Routes>
                <Route
                    path="/"
                    element={<Home clubs={DUMMY_CLUBS} events={DUMMY_EVENTS} />}
                />
                <Route path="/admin" element={<Admin />} />
                <Route path="/member" element={<Member />} />
                {isAdminExists && <Route path="/admin/home" element={<AdminHome />} />}
                {DUMMY_CLUBS.map((club) => {
                    return (
                        <Route
                            key={Math.random()}
                            path={`/club/${club.clubName
                                .split(" ")
                                .join("-")
                                .toLowerCase()}`}
                            element={<ClubPage club={club} />}
                        />
                    );
                })}
            </Routes>
        </div>
    );
};

export default App;
