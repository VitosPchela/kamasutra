import React from 'react';
import ss from './App.module.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";

const App = () => {
  return (
    <div className={ss.main}>
        <Header/>
        <Navbar/>
        <Profile/>
    </div>
  );
}

export default App;