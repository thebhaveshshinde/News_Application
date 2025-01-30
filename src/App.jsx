import {BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Nav from "./Components/Nav.jsx"
import All from "./Components/All.jsx"
import Entertainment from "./Components/Entertainment.jsx"
import Sports from "./Components/Sports.jsx"
import Technology from "./Components/Technology.jsx"
import Health from "./Components/Health.jsx"


function App() {


  return (
    <>
      <Router>
        <Nav />
        <div>
        <Routes>
          <Route path="/" element={<All />} />
          <Route path="/Entertainment" element={<Entertainment />} />
          <Route path="/Sports"  element={<Sports />} />
          <Route path="/Technology"  element={<Technology/>} />
          <Route path="/Health"  element={<Health />}/>
        </Routes>
        </div>
        
      </Router>
    </>
  )
}

export default App
