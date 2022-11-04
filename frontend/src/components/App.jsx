import { Home, Login, Register, Navbar, CreateTheory } from "./pages";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

export const App = () => (
  <>
    <Router>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home/>} ></Route>
        <Route path="/login" element={<Login/>} ></Route>
        <Route path="/register" element={<div><h1>Register</h1><Register/></div>} ></Route>
        <Route path="/createTheory" element={<CreateTheory/>} ></Route>
      </Routes>
    </Router>
  </>
);