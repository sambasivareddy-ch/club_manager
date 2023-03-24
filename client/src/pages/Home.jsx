import React, { useState } from "react";

import ClubCard from "../components/ui/ClubCard";
import EventCard from "../components/ui/EventCard";
import Intro from "../components/ui/Intro";
import Footer from "../components/ui/Footer";
import styles from "./home.module.css";

const Home = (props) => {
  const [selectedDate, setSelectedDate] = useState(new Date().toDateString());

  return (
    <div className={styles["home-wrapper"]}>
      <Intro />
      <div className={styles["club-list__wrapper"]}>
        <h2>Clubs in the College</h2>
        <ol className={styles["club-list"]}>
          {props.clubs.map((club) => {
            return (
              <li key={Math.random()} className={styles["club-list__item"]}>
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
        <div className={styles["event-header"]}>
          <h2>Events near by</h2>
          <div className={styles["event-date__filter"]}>
            Filter by Date:{" "}
            <select
              onChange={(e) => {
                console.log(e.target.value);
                setSelectedDate(e.target.value);
              }}
            >
              <option>{selectedDate}</option>
              {props.events.map((evnt) => {
                return (
                  <option key={Math.random()}>
                    {evnt.eventDate.toDateString()}
                  </option>
                );
              })}
            </select>
          </div>
        </div>
        <div className={styles["events"]}>
          {selectedDate === new Date().toDateString() &&
            props.events.map((evnt) => {
              return (
                <EventCard
                  key={Math.random()}
                  eventDate={evnt.eventDate.toDateString()}
                  eventName={evnt.eventName}
                  hostClub={evnt.hostClub}
                />
              );
            })}
          {selectedDate !== new Date().toDateString() &&
            props.events.filter(
              (evnt) => evnt.eventDate.toDateString() === selectedDate
            ).map((evnt) => {
              return (
                <EventCard
                  key={Math.random()}
                  eventDate={evnt.eventDate.toDateString()}
                  eventName={evnt.eventName}
                  hostClub={evnt.hostClub}
                />
              );
            })}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
