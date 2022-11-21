
import { Community,Comments } from "./pages/channel";
import { Home, Login, Navbar, Dashboard, TestSearchBars, NotFound } from "./pages";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import { AccountProvider } from "../context";

export const App = () => {
  return <>
    <AccountProvider>
      <Router>
        <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<Home/>} ></Route>
          <Route path="/login" element={<Login/>} ></Route>
          {/* <Route path="/register" element={<Register/>} ></Route> */}
          {/* <Route path="/createTheory" element={<CreateTheory/>} ></Route> */}
          <Route path="/:channelName/:channelId" element={<Community/>} ></Route>
          <Route path=":channelName/:channelId/:postId" element={<Comments/>} ></Route>
          <Route path="/dashboard" element={<Dashboard/>} ></Route>
          <Route path="/TestSearchBars" element={<TestSearchBars/>} ></Route>
          <Route path="*" element={<NotFound/>}></Route>
        </Routes>
      </Router>
    </AccountProvider>
    
  </>;
};