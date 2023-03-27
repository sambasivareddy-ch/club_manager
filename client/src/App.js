import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import { createPortal } from "react-dom";

import useApi from "./hooks/useApi";
import Navigation from "./components/navigation/Navigation";
import Admin from "./components/forms/Admin";
import Member from "./components/forms/Member";
import AdminHome from "./pages/AdminHome";
import ClubPage from "./pages/ClubPage";
import Home from "./pages/Home";
import styles from "./app.module.css";
import Toast from "./components/portals/Toast";

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
    const { getDataFromApiHandler } = useApi();
    const [isAdminExists, setIsAdminExists] = useState(null);
    const [clubsData, setClubsData] = useState();
    const [hasError, setHasError] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setHasError(false);
        });
    }, [hasError]);

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        });
    }, [isLoading]);

    useEffect(() => {
        setIsAdminExists(localStorage.getItem("isAdmin"));
    }, []);

    useEffect(() => {
        const getClubsInfoHandler = async () => {
            setIsLoading(true);
            await getDataFromApiHandler({
                url: "http://localhost:5000/get-clubs",
            })
                .then((res) => setClubsData(res.clubs))
                .catch((err) => setHasError(true));
            setIsLoading(false);
        };
        getClubsInfoHandler();
    }, []);

    console.log(clubsData);

    return (
        <div className={styles["app"]}>
            <Navigation isAdminLoggedIn={isAdminExists} />
            <Routes>
                <Route
                    path="/"
                    element={<Home clubs={clubsData ? clubsData: []} events={DUMMY_EVENTS} />}
                />
                <Route path="/admin" element={<Admin />} />
                <Route path="/member" element={<Member />} />
                {isAdminExists && (
                    <Route path="/admin/home" element={<AdminHome />} />
                )}
                {clubsData &&
                    clubsData.map((club) => {
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
            {hasError &&
                createPortal(
                    <Toast message="An Error Occurred" typeOfToast="error" />,
                    document.getElementById("portal")
                )}
            {isLoading &&
                createPortal(
                    <Toast message="Loading..." typeOfToast="loading" />,
                    document.getElementById("portal")
                )}
        </div>
    );
};

export default App;
