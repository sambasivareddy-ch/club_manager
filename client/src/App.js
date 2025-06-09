import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import { createPortal } from "react-dom";
import { useDispatch } from "react-redux";

import useApi from "./hooks/useApi";
import Navigation from "./components/navigation/Navigation";
import Admin from "./components/forms/Admin";
import Member from "./components/forms/Member";
import AdminHome from "./pages/AdminHome";
import ClubPage from "./pages/ClubPage";
import Home from "./pages/Home";
import styles from "./app.module.css";
import Toast from "./components/portals/Toast";
import PageNotFound from "./components/ui/PageNotFound";
import { eventDatesActions } from "./store/eventDateSlice";

const App = () => {
  const dispatcher = useDispatch();
  const { getDataFromApiHandler } = useApi();
  const [isAdminExists, setIsAdminExists] = useState(null);
  const [clubsData, setClubsData] = useState();
  const [eventsData, setEventsData] = useState();
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  if (eventsData) {
    for (let i = 0; i < eventsData.length; i++) {
      const evntDate = eventsData[i].eventDate;
      dispatcher(eventDatesActions.add({
        date: new Date(evntDate).toDateString(),
      }))
    }
  }

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
        url: `${process.env.REACT_APP_SERVER_URL}/get-clubs`,
      })
        .then((res) => setClubsData(res.clubs))
        .catch((err) => setHasError(true));
      setIsLoading(false);
    };
    const getEventsInfoHandler = async () => {
      setIsLoading(true);
      await getDataFromApiHandler({
        url: `${process.env.REACT_APP_SERVER_URL}/get-events`,
      })
        .then((res) => setEventsData(res.events))
        .catch((err) => setHasError(true));
    };
    getEventsInfoHandler();
    getClubsInfoHandler();
  }, []);

  return (
    <div className={styles["app"]}>
      <Navigation isAdminLoggedIn={isAdminExists} />
      <Routes>
        <Route
          path="/"
          element={
            <Home
              clubs={clubsData ? clubsData : []}
              events={eventsData ? eventsData : []}
            />
          }
        />
        <Route path="/admin" element={<Admin />} />
        <Route path="/member" element={<Member />} />
        {isAdminExists && <Route path="/admin/home" element={<AdminHome />} />}
        {clubsData &&
          clubsData.map((club) => {
            return (
              <Route
                key={Math.random()}
                path={`/club/${club._id}`}
                element={<ClubPage club={club} />}
              />
            );
          })}
          <Route path="*" element={<PageNotFound/>} />
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
