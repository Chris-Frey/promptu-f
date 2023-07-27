import { Routes, Route } from "react-router-dom"
import { useState, useEffect } from "react";
import './App.css';
import Header from './components/Header/Header'
import Home from "./pages/Home";
import BuddyProfile from "./pages/BuddyProfile";
import LogIn from "./pages/LogIn";
import ActivityShow from "./pages/ActivityShow";
import mockActivities from "./mockActivities";
import mockUsers from "./mockUsers";
import SignUp from "./pages/SignUp";
import ActivityEdit from "./pages/ActivityEdit";
import ActivityFilter from "./pages/ActivityFilter";
import AboutUs from "./pages/AboutUs";
import mockUsers from "./mockUsers";


function App() {
const [activities, setActivities] = useState([])
const [currentUser, setCurrentUser] = useState(mockUsers[0])


const [users, setUsers] = useState(mockUsers)

  useEffect(() => {
    readActivity()
  }, [])

  const readActivity = () => {
    fetch("http://localhost:3000/activities")
      .then((response) => response.json())
      .then((payload) => {
        setActivities(payload)
      })
      .catch((error) => console.log(error))
  }

const createActivity = (activity) => {
  fetch("http://localhost:3000/activities", {
    body: JSON.stringify(activity),
    headers: {"Content-Type": "application/json"},
    method: "POST"
  })
    .then((response) => response.json())
    .then((payload) => readActivity())
    .catch((errors) => console.log("Activity create errors:", errors))
}

const updateActivity = (activity, id) => {
  fetch(`http://localhost:3000/activities/${id}/`, {
    body: JSON.stringify(activity),
    headers: {"Content-Type": "application/json"},
    method: "PATCH"
  })
    .then((response) => response.json())
    .then((payload) => readActivity())
    .catch((errors) => console.log("Activity update errors:", errors))
}

const deleteActivity = (id) => {
  fetch(`http://localhost:3000/activities/${id}`, {
    headers: {"Content-Type": "application/json"},
    method: "DELETE"
  })
    .then((response) => response.json())
    .then((payload) => readActivity())
    .catch((errors) => console.log("delete errors:", errors))
}



  return (
      <>
      <Header />
      <Routes>
        <Route path="/" element={<Home activities={activities} currentUser={currentUser} createActivity={createActivity} />} />
        <Route path="/:category?" element={<ActivityFilter activities={activities}/>} />
        <Route path="/buddyprofile/:id" element={<BuddyProfile selectedUser={users}/>} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/activityshow/:id" element={<ActivityShow activities={activities} updateActivity={updateActivity} deleteActivity={deleteActivity} />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/activityedit/:id" element={<ActivityEdit activities={activities} updateActivity={updateActivity}/>} />
        <Route path="/aboutus" element={<AboutUs />} />
      </Routes>
      </>
  );
}

export default App;
