import { Home, Login } from "./pages/index";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

export const App = () => (
  <>
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} ></Route>
        <Route path="/login" element={<Login/>} ></Route>
      </Routes>
    </Router>
  </>
);