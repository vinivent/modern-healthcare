import { Route, Routes } from "react-router-dom";
import Register from "../pages/Register";
import Registered from "../pages/Registered";
import Home from "../pages/Home";

import Treatment from "../pages/Treatment";


function RoutesApp() {
    return (
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/login" element={<Registered/>}/>
            <Route path="/signup" element={<Register/>}/>
            <Route path="/treatment" element={<Treatment/>}/>
            <Route/>
        </Routes>
    )
}

export default RoutesApp;