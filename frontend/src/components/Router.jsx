import {BrowserRouter, Route, Routes} from 'react-router-dom';
import { Layout } from "./pages/Layout";
import { AllRoutes } from "../routes/AllRoutes";

export const Router = () => {
    return <>
        <BrowserRouter>
            <Routes>
                <Route element = {<Layout/>}>
                {
                    AllRoutes().map((route, index) => <Route key={index} { ...route } />)
                }
                </Route>
            </Routes>
        </BrowserRouter>
    </>
}