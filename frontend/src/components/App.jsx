import { Home, Login, Register, Navbar, CreateTheory } from "./pages";
import { Channel } from "./pages/Channel/Channel";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

export const App = () => (
  <>
    <Router>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home/>} ></Route>
        <Route path="/login" element={<Login/>} ></Route>
        <Route path="/register" element={<Register/>} ></Route>
        <Route path="/createTheory" element={<CreateTheory/>} ></Route>
        <Route path="/channel" element={<Channel/>} ></Route>
        {/* <Route path="/channel/:channel/theoryComments" element={<Comments/>} ></Route> */}
      </Routes>
    </Router>
  </>
);