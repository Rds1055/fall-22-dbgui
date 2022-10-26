import { Login } from "./pages/index";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

export const App = () => (
  <>
    <Router>
      {/* <Layout account = {account} setAccount={setAccountValue}/> */}
      <Routes>
        {/* <Route path="/" element={<Main setProduct={setProduct}/>} ></Route> */}
        <Route path="/login" element={<Login/>} ></Route>
      </Routes>
    </Router>
  </>
);