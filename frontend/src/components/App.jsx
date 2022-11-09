
import { Channel } from "./pages/Channel/Channel";
import { Home, Login, Register, Navbar, Dashboard, CreateTheory } from "./pages";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

export const App = () => (
  <>
    <Router>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home/>} ></Route>
        <Route path="/login" element={<Login/>} ></Route>
        <Route path="/createTheory" element={<CreateTheory/>} ></Route>
        <Route path="/channel" element={<Channel/>} ></Route>
        {/* <Route path="/channel/:channel/theoryComments" element={<Comments/>} ></Route> */}
        <Route path="/dashboard" element={<Dashboard/>} ></Route>
      </Routes>
    </Router>
  </>
);