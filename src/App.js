import { Routes, Route } from "react-router-dom"
import { useState } from "react";
import './App.css';
import Header from './components/Header/Header'
import Home from "./pages/Home";
import Friends from "./pages/Friends";
import BuddyProfile from "./pages/BuddyProfile";
import LogIn from "./pages/LogIn";
import ActivityShow from "./pages/ActivityShow";
import userActivities from "./mockActivities";
import SignUp from "./pages/SignUp";


function App() {
const [activities, setActivities] = useState(userActivities)

  return (
      <>
      <Header />
      <Routes>
        <Route path="/" element={<Home activities={activities}/>} />
        <Route path="/friends" element={<Friends />} />
        <Route path="/buddyprofile" element={<BuddyProfile />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/activityshow/:id" element={<ActivityShow activities={activities} />} />
        <Route path="/signup" element={<SignUp />} />

      </Routes>
      </>
  );
}

export default App;
