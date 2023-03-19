import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Navigation from './components/navigation/Navigation';
import Admin from './components/forms/Admin';
import Member from './components/forms/Member';
import AdminHome from './pages/AdminHome';
import ClubPage from './pages/ClubPage';
import Home from './pages/Home';
import styles from './app.module.css';

const App = () => {
  return (
    <div className={styles['app']}>
      <Navigation/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/admin" element={<Admin />} />
        <Route path="/member" element={<Member />} />
        <Route path="/admin/home" element={<AdminHome/>}/>
        <Route path="/club" element={<ClubPage/>}/>
      </Routes>
    </div>
  );
}

export default App;
