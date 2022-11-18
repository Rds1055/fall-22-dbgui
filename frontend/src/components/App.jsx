
import { Community,Comments } from "./pages/channel";
import { Home, Login, Register, Navbar, Dashboard, TestSearchBars } from "./pages";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import { useState } from "react";

export const App = () => {
  const [account, setAccount] = useState(undefined);

  return <>
    <Router>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home setAccount = { setAccount }/>} ></Route>
        <Route path="/login" element={<Login setAccount = { setAccount }/>} ></Route>
        {/* <Route path="/register" element={<Register/>} ></Route> */}
        {/* <Route path="/createTheory" element={<CreateTheory/>} ></Route> */}
        <Route path="/:channelName/:channelId" element={<Community/>} ></Route>
        <Route path=":channelName/:channelId/:postId" element={<Comments/>} ></Route>
        <Route path="/dashboard" element={<Dashboard/>} ></Route>
        <Route path="/TestSearchBars" element={<TestSearchBars/>} ></Route>
      </Routes>
    </Router>
  </>;
};