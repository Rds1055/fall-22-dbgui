import { Home, Login, Register } from "./pages";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

export const App = () => (
  <>
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} ></Route>
        <Route path="/login" element={<Login/>} ></Route>
        <Route path="/Register" element={<Register/>} ></Route>
      </Routes>
    </Router>
  </>
);